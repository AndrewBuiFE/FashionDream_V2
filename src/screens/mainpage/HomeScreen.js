/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CodePush from 'react-native-code-push';
import {copilot, CopilotStep, walkthroughable} from 'react-native-copilot';
import {useDispatch, useSelector} from 'react-redux';
import {PRODUCT, SECTION} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import ProductItemComponent from '../../components/ProductItemComponent';
import RadiusButton from '../../components/RadiusButton';
import ParallaxScrollView from '../../libs/ParallaxScrollView';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppImages} from '../../shared/constants/AppImages';
import {ScreenName} from '../../shared/constants/ScreenName';
import Utils from '../../shared/helpers/Utils';
const PARALLAX_HEADER_HEIGHT = 536;
const STICKY_HEADER_HEIGHT = 196;
/**
 * @author Hoang
 * @decription Main screen. Display after logging in
 */
const HomeScreen = props => {
  // common vars
  const WalkthroughableText = walkthroughable(Text);
  const WalkthroughableView = walkthroughable(View);
  // common hooks
  const [productsFavorite, setProductsFavorite] = useState(
    PRODUCT.map(product => {
      return product.isFavorited;
    }),
  );
  const [refresh, setRefresh] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {products, pagination} = useSelector(state => state.product);
  const {codepushDeploymentKey} = useSelector(state => state.system);
  const ScrollViewRef = useRef();
  // rendering functions
  const renderItem = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').Product>}
     */
    ({item, index}) => {
      return (
        <ProductItemComponent
          product={item}
          key={index}
          isBottomRightButtonActive={productsFavorite[index]}
          onButtomRightButtonPress={() => {
            let tempState = [...productsFavorite];
            tempState[index] = !tempState[index];
            setProductsFavorite(tempState);
          }}
          onProductPress={() => {
            navigation.navigate(ScreenName.productCardScreen, {product: item});
          }}
        />
      );
    },
    [],
  );
  const renderSeparator = useCallback(
    () => <View style={{height: 260, width: 16}} />,
    [],
  );
  const renderFooter = useCallback(() => {
    return <DividerComponent height={260} width={16} />;
  }, []);
  const renderRefresh = useCallback(() => {
    return (
      <RefreshControl
        // refreshing
        onRefresh={() => {
          console.log('Refreshing...');
        }}
        title="Refresh control"
        progressBackgroundColor={AppColors.lightDark}
        progressViewOffset={3}
        titleColor={AppColors.hotRed}
        tintColor={AppColors.hotRed}
      />
    );
  }, []);

  const renderStickyForeGround = useCallback(() => {
    return (
      <View
        style={{
          width: '100%',
        }}>
        <ImageBackground
          source={AppImages.big_banner}
          style={{width: '100%', height: '100%'}}>
          <Text
            style={{
              fontSize: 48,
              fontFamily: 'Metropolis',
              color: AppColors.primaryText,
              fontWeight: 'bold',
              width: 190,
              marginTop: 354,
              lineHeight: 48,
              marginLeft: 15,
            }}>
            Fashion sale
          </Text>
          <CopilotStep
            name="checkButton"
            order={1}
            text="Press here to see new features"
            active={false}>
            {/* <RadiusButton
              title="Check"
              type="redButton"
              buttonCustomStyle={{width: 160, marginLeft: 15, marginTop: 18}}
              onButtonPress={() => {
                navigation.navigate(ScreenName.shopNavigator);
              }}
            /> */}
            <WalkthroughableView>
              <RadiusButton
                title="Check"
                type="redButton"
                buttonCustomStyle={{width: 160, marginLeft: 15, marginTop: 18}}
                onButtonPress={() => {
                  navigation.navigate(ScreenName.shopNavigator);
                }}
              />
            </WalkthroughableView>
          </CopilotStep>
        </ImageBackground>
      </View>
    );
  }, []);
  const renderStickHeader = useCallback(() => {
    return (
      <View
        style={{
          width: '100%',
        }}>
        <ImageBackground
          source={AppImages.small_banner}
          style={{width: '100%', height: '100%'}}>
          <Text style={[AppText.largeTitle, {marginTop: 136, marginLeft: 16}]}>
            Street clothes
          </Text>
        </ImageBackground>
      </View>
    );
  }, []);

  // effect
  const handleStepChange = step => {
    //Handler, in case we want to handle the step change
    console.log(`Current step is: ${step.name}`);
  };
  const backAction = () => {
    Alert.alert('Exit App?', 'Do you want to exit this app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Exit',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);
  useEffect(() => {
    props.copilotEvents.on('step change', handleStepChange);
    props.start(false, ScrollViewRef.current);
    return () => {
      props.copilotEvents.off('stop');
    };
  }, []);
  // codepush
  useEffect(() => {
    if (codepushDeploymentKey && codepushDeploymentKey.length > 0) {
      CodePush.sync(
        {
          updateDialog: true,
          installMode: CodePush.InstallMode.IMMEDIATE,
          deploymentKey: codepushDeploymentKey,
        },
        status => {
          switch (status) {
            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
              Utils.toast('Downloading...');
              break;
            case CodePush.SyncStatus.INSTALLING_UPDATE:
              Utils.toast('Installing...');
              break;
            case CodePush.SyncStatus.UPDATE_INSTALLED:
              Utils.toast('Installed');
              break;
            default:
              break;
          }
        },
        ({receivedBytes, totalBytes}) => {
          Utils.toast(
            `Downloading...${Math.round((receivedBytes * 100) / totalBytes)}%`,
          );
        },
      );
    }
  }, [codepushDeploymentKey]);
  return (
    <ParallaxScrollView
      backgroundColor="black"
      contentBackgroundColor="black"
      parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
      stickyHeaderHeight={STICKY_HEADER_HEIGHT}
      contentContainerStyle={{
        backgroundColor: 'black',
        flex: 1,
      }}
      renderForeground={renderStickyForeGround}
      renderStickyHeader={renderStickHeader}
      ref={ScrollViewRef.current}>
      {SECTION.map((section, index) => {
        return (
          <View style={{marginTop: 40, marginLeft: 16}} key={index}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={AppText.largeTitle}>{section.title}</Text>
                <Text style={[AppText.tinyTitle, {marginTop: 4}]}>
                  {section.description}
                </Text>
              </View>
              <CopilotStep
                name={`View all ${index}`}
                order={index + 2}
                text="View all products here"
                active={false}>
                <WalkthroughableView>
                  <TouchableOpacity style={{marginRight: 14}}>
                    <Text
                      style={[
                        AppText.tinyTitle,
                        {color: AppColors.primaryText},
                      ]}>
                      View all
                    </Text>
                  </TouchableOpacity>
                </WalkthroughableView>
              </CopilotStep>
            </View>
            <View style={{marginTop: 22}}>
              <FlatList
                data={products}
                horizontal
                // refreshControl={renderRefresh}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter}
              />
            </View>
          </View>
        );
      })}
      <DividerComponent height={40} />
    </ParallaxScrollView>
  );
};

export default copilot({
  animated: true,
  overlay: 'svg',
  stopOnOutsideClick: true,
  // backdropColor: 'red',
  verticalOffset: 0,
})(HomeScreen);
const styles = StyleSheet.create({});
