import {is} from 'immutable';
import CodePush from 'react-native-code-push';
import {useSelector} from 'react-redux';
import {createSelector, createSelectorCreator, defaultMemoize} from 'reselect';

const createImmuableSelector = createSelectorCreator(defaultMemoize, is);
/**
 * @template T
 * Get iHoadon state
 * **This is a hook depends on redux**
 * @param {(state:import("../stores/slices/type").FashionDreamState)=>T=} selector
 * @return {T}
 */
export function useFashionDreamSelector(selector = state => state) {
  return useSelector(
    createSelector(
      createImmuableSelector(
        state => state.get('fashionDream'),
        state => state,
      ),
      selector,
    ),
  );
}

export const getCodePushVersion = async () => {
  var metadata = await CodePush.getUpdateMetadata();
  if (metadata) {
    return metadata.label;
  }
  return '';
};
