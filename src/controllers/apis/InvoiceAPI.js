/* eslint-disable no-undef */
import store from '@store/configStore';
import { axiosSendRequest } from 'ihoadon/controllers/axios/axiosSendRequest';
import Const from 'ihoadon/shared/Const';
import Global from 'ihoadon/shared/Global';

const tag = 'InvoiceAPI';

/**
 * @author chien: API LẤY VỀ DANH SÁCH HÓA ĐƠN ( SỬ DỤNG TRONG CÁC MÀN HÌNH CreatedInvoiceListScreen/ProcessedInvoiceListScreen/SearchInvoiceScreen )
 * @param invoiceType loại hóa đơn ( nhận 2 giá trị 01GTKT (hóa đơn giá trị gia tăng) 02GTTT ( hóa đơn bán hàng)) ( bắt buộc)
 * @param buyerMST mã số thuế bên mua (tùy chọn)
 * @param buyerName tên người mua ( tùy chọn)
 * @param exportDateFrom ngày bắt đầu xuất hóa đơn (yyyy-mm-dd H:i:s) ( bắt buộc)
 * @param exportDateTo ngày kết thúc xuất hóa đơn (yyyy-mm-dd H:i:s) (bắt buộc)
 * @param {INVOICE_STATE} invoiceState Trạng thái lập hóa đơn ( tùy chọn)
 * @param {INVOICE_CQT_STATE} invoiceCQTState trạng thái gửi CQT (tùy chọn) (nếu từ màn hình xử lý hóa đơn thì truyền NOT_SET)
 * @param {PROCESS_INVOICE_STATE} processInvoiceState trạng thái xử lý (tùy chọn)
 * @param {INCORRECT_INVOICE_CQT_STATE} incorrectInvoiceState trạng thái gửi hóa đơn sai (tùy chọn ) (nếu từ màn hình lập hóa đơn và màn hình tra cứu hóa đơn thì truyền NOT_SET)
 * @param {number} page bắt đầu tù 1 (tùy chọn)
 * @returns {Promise<void>}
 */
const getInvoices = async ({
  invoiceType = '01GTKT',
  buyerMST = null,
  buyerName = null,
  exportDateFrom,
  exportDateTo,
  invoiceState = null,
  invoiceCQTState = null,
  processInvoiceState = null,
  incorrectInvoiceState = null,
  page = 1,
}) => {
  console.log(tag, {
    invoiceState,
    invoiceCQTState,
    processInvoiceState,
    incorrectInvoiceState,
  });

  const invoiceWithCode = store.getState().get('account')
    ?.invoiceDeclarations?.is_invoice_with_code;
  if (page < 1) {
    page = 1;
  }
  const params = {
    page,
    limit: Global.Const.API_LIMIT_INVOICE,
    options: {
      sum_payment_process: 1,
      is_view_index: 1,
    },
    includes: ['template', 'invoice_files', 'user', 'invoice_products'],
    sort: [
      api.utils.sort('created_at', 'DESC'),
      api.utils.sort('status_order', 'ASC'),
      api.utils.sort('invoice_date', 'DESC'),
      api.utils.sort('invoice_number', 'DESC'),
    ],
  };

  const filter_groups = [];
  const filters = [];

  // mặc định
  filters.push(api.utils.filter('batch_id', 'eq', null));
  //invoiceType
  filter_groups.push({
    filters: [api.utils.filter('template.invoice_type', 'in', [invoiceType])],
  });

  if (buyerMST) {
    filters.push(api.utils.filter('buyer_tax_code', 'eq', buyerMST));
  }
  if (buyerName) {
    filters.push(api.utils.filter('buyer_name', 'eq', buyerName));
  }
  if (exportDateFrom) {
    filters.push(api.utils.filter('date', 'gte', exportDateFrom));
  }
  if (exportDateTo) {
    //chien: fix dữ liệu truyền vào sai
    exportDateTo = exportDateTo.replace('00:00:00', '23:59:59');
    filters.push(api.utils.filter('date', 'lt', exportDateTo));
  }
  // invoiceState
  if (invoiceState) {
    filter_groups.push(
      api.utils.filters(
        [
          api.utils.filter('crm_id', 'eq', null),
          api.utils.filter('status', 'eq', invoiceState),
        ],
        true,
      ),
    );
  } else {
    filter_groups.push(
      api.utils.filters(
        [
          api.utils.filter('crm_id', 'eq', null),
          api.utils.filter(
            'status',
            'in',
            Object.values(Global.Const.INVOICE_STATE),
          ),
        ],
        true,
      ),
    );
  }

  // invoice CQT State
  if (invoiceState === Const.INVOICE_STATE.GHI_TAM) {
    filters.push(api.utils.filter('invoice_number', 'eq', null));
    if (invoiceWithCode) {
      filters.push(api.utils.filter('send_department_status', 'eq', null));
    }
  } else if (invoiceState === Const.INVOICE_STATE.KY_LOI) {
    filters.push(api.utils.filter('invoice_number', 'gte', 1));
    if (invoiceWithCode) {
      filters.push(api.utils.filter('send_department_status', 'eq', null));
    }
  } else if (invoiceCQTState && invoiceCQTState !== 'NOT_SET') {
    filters.push(
      api.utils.filter('send_department_status', 'eq', invoiceCQTState),
    );
  } else if (invoiceCQTState !== 'NOT_SET') {
    filters.push(
      api.utils.filter(
        'send_department_status',
        'in',
        Object.values(Global.Const.INVOICE_CQT_STATE),
      ),
    );
  }
  // processInvoiceState
  if (processInvoiceState) {
    filters.push(
      api.utils.filter('adjustment_type', 'eq', processInvoiceState),
    );
  } else {
    filters.push(
      api.utils.filter(
        'adjustment_type',
        'in',
        Object.values(Global.Const.PROCESS_INVOICE_STATE),
      ),
    );
  }
  // incorrectInvoiceState
  if (incorrectInvoiceState && incorrectInvoiceState !== 'NOT_SET') {
    filters.push(
      api.utils.filter('send_wrong_status', 'eq', incorrectInvoiceState),
    );
  } else if (incorrectInvoiceState !== 'NOT_SET') {
    filters.push(
      api.utils.filter(
        'send_wrong_status',
        'in',
        Object.values(Global.Const.INCORRECT_INVOICE_CQT_STATE),
      ),
    );
  }

  filter_groups.push({filters: filters});

  params.filter_groups = filter_groups;

  return await axiosSendRequest(
    'get',
    Global.Const.apiBaseURL + '/invoices',
    params,
  );
};

/**
 * @author chien: LẤY VỀ DANH SÁCH MẪU HÓA ĐƠN ( dùng trong màn hình InvoiceTemplateChooserScreen )
 * @param {string} invoiceType loại hóa đơn ( nhận 2 giá trị 01GTKT (hóa đơn giá trị gia tăng) 02GTTT ( hóa đơn bán hàng)) , nếu truyền null sẽ lấy tất cả ( bắt buộc)
 * @returns {Promise<void>}
 */
const getTemplateList = async (invoiceType = null) => {
  const params = {
    options: {link_preview: '1'},
  };
  const filter_groups = [];
  const filters = [];

  // mặc định
  filters.push(api.utils.filter('is_decree_new', 'eq', 1));
  filters.push(api.utils.filter('status', 'eq', 'HOAT_DONG'));
  if (invoiceType) {
    filters.push(api.utils.filter('invoice_type', 'eq', invoiceType));
  } else {
    filters.push(
      api.utils.filter(
        'invoice_type',
        'in',
        Object.values(Const.INVOICE_TYPE).map(type => type.code),
      ),
    );
  }
  filter_groups.push({filters: filters});

  params.filter_groups = filter_groups;

  return await axiosSendRequest(
    'get',
    Global.Const.apiBaseURL + '/templates',
    params,
  );
};

/**
 * @author chien: LẤY VỀ THÔNG TIN CỦA TEMPLATE ( CHỨA CẢ NỘI DUNG ẢNH jpg_file )
 * @param templateId id mẫu hóa đơn ( trả về khi lấy danh sách mẫu hóa đơn )
 * @param {number} jpg_file 0/1 nếu là 0 sẽ ko lấy về nội dung file, nếu là 1 lấy về nội dung file jpg để hiển thị lên ( mặc định = 1)
 * @returns {Promise<void>}
 */
const getTemplateDetail = async (templateId, jpg_file = 1) => {
  const params = {link_preview: 1};
  params.options = {jpg_file: jpg_file};
  return await axiosSendRequest(
    'get',
    `${Global.Const.apiBaseURL}/templates/${templateId}`,
    params,
  );
};

/**
 * @author chien: xem truoc mau hoa don. Trả về dữ liệu dạng json
 * @param invoice
 * @returns {Promise<{result: string, code: number, message: string}>}
 */
const previewInvoice = async invoice => {
  invoice = {...Const.invoicePreview, ...invoice};
  const params = {
    options: {
      return_link: true,
      from_app: true,
    },
    invoices: [invoice],
  };
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL + '/invoices-preview',
    params,
  );
};

/**
 * @author chien: lập hóa đơn hoặc ghi tạm hóa đơn
 * @param invoice
 * @param {boolean} isTemp ghi tạm hóa đơn hay ko?
 * @returns {Promise<{result: string, code: number, message: string}>}
 */
const createInvoice = async (invoice, isTemp) => {
  invoice = {...Const.invoiceCreator, ...invoice};
  const params = {invoice: invoice};
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL +
      '/new/invoices' +
      (isTemp ? '' : '?options[invoice_number]=1'),
    params,
  );
};

/**
 * @author chien: Kí và xuất hóa đơn
 * @param pass_code code khi bật dialog lên để nhập
 * @param id id của invoice
 * @param xml_string xml_string trả về khi lập hóa đơn
 * @returns {Promise<void>}
 */
const exportInvoice = async (pass_code, id, xml_string) => {
  const invoice = {pass_code, id, xml_string};
  return await axiosSendRequest('post', Const.apiBaseURL + '/invoices-export', {
    invoice: invoice,
  });
};

/**
 * Lấy thông tin tờ khai đăng ký sử dụng hóa đơn điện tử
 * @returns {Promise<{result: string, code: number, message: string}>}
 */
const getInvoiceDeclarations = async () => {
  return await axiosSendRequest(
    'get',
    Const.apiBaseURL +
      '/declarations?chap_nhan=1&includes[]=registration_signatures',
    null,
  );
};

/**
 * @author chien: tìm thông tin khách hàng bằng mst, kết quả trả về mã hóa base64
 * @param taxCode
 * @returns {Promise<void>}
 */
const searchCustomerInfoByTaxCode = async taxCode => {
  return await axiosSendRequest(
    'post',
    'https://einvoicehub.efy.com.vn/api/invoiceHub/lookup_info',
    {type: 'MST', value: taxCode},
    {Authorization: 'Basic MDEwMjUxOTA0MTowMTAyNTE5MDQx'},
  );
};

/**
 * @author chien: lấy thông tin cụ thể của 1 hóa đơn
 * @param id
 * @returns {Promise<{result: string, code: number, message: string}>}
 */
const getInvoiceDetail = async id => {
  const params = {
    includes: ['user', 'invoice_products', 'invoice_files'],
  };
  return await axiosSendRequest(
    'get',
    Const.apiBaseURL + `/invoices/${id}`,
    params,
  );
};
/**
 * @author chien: lấy nhật kí của 1 hóa đơn
 * @param id
 * @returns {Promise<{result: string, code: number, message: string}>}
 */
const getInvoiceHistory = async id => {
  const params = {
    limit: 5000,
    page: 1,
    options: {
      sum_payment_process: 1,
      is_view_index: 1,
    },
    filter_groups: [
      {
        filters: [api.utils.filter('invoice_id', 'eq', id)],
      },
    ],
  };

  return await axiosSendRequest(
    'get',
    Const.apiBaseURL + '/invoice-process',
    params,
  );
};

/**
 * @author chien: lấy về nội dung sửa hóa đơn. Nếu như api lấy nhật ký hóa đơn có is_view_detail = true
 * thì sẽ hiển thị 1 con mắt -> bấm vào sẽ chuyển sang màn hình sửa hóa đơn như trong mục 7. Nhật ký
 * @param id: id của hóa đơn  (id test: 772F5800-241E-11ED-BEB9-9D8BB5CED908)
 * @returns {Promise<{result: string, code: number, message: string}>}
 */
const getDetailInvoiceHistory = async id => {
  return await axiosSendRequest(
    'get',
    Const.apiBaseURL + '/invoice-process/' + id,
  );
};

/**
 * @author chien: cập nhật thông tin hóa đơn
 * @param invoice: hóa đơn cập nhật ( phải chứa id)
 * @param {boolean} isTemp có phải là hóa đơn ghi tạm hay ko???
 * @returns {Promise<void>}
 */
const updateInvoice = async (invoice, isTemp = false) => {
  return await axiosSendRequest(
    'put',
    Const.apiBaseURL +
      `/new/invoices/${invoice.id}` +
      (isTemp ? '' : '?options[invoice_number]=1'),
    {invoice: invoice},
  );
};

/**
 * @author chien: lấy danh sách thông điệp với CQT
 * @param messageCode
 * @returns {Promise<{result: string, code: number, message: string}>}
 */
const getMessageList = async messageCode => {
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL + '/invoices/get-infor-wrong',
    {message_code: messageCode},
  );
};

/**
 * @author chien xóa 1 hoặc nhiều hóa đơn ghi tạm
 * @param invoiceIds
 * @returns {Promise<void>}
 */
const deleteTempInvoices = async (invoiceIds = []) => {
  return await axiosSendRequest(
    'delete',
    Const.apiBaseURL + '/invoices/' + invoiceIds.join(','),
  );
};

/**
 * @author chien: thông báo 1 hoặc nhiều hóa đơn sai sót với CQT
 * @param notificationType 1: không chọn yêu cầu rà soát, 2: chọn yêu cầu rà soát
 * @param notificationNumber: số TB của CQT ( khi notificationType=2)
 * @param notificationDate ngày TB của CQT ( khi notificationType=2)
 * @param invoices là mảng bao gồm các thông tin dưới đây
 * tax_authority_code: lấy trong thông tin invoice
 * template_code: lấy trong thông tin invoice
 * invoice_series: lấy trong thông tin invoice
 * invoice_date: lấy trong thông tin invoice
 * invoice_number: lấy trong thông tin invoice
 * reason: người dùng nhập
 * is_invoice_with_code: lấy trong thông tin invoice
 * invoice_id: lấy trong thông tin invoice
 * notification_nature: tính chất thông báo (1:Hủy 2:điều chỉnh 3:thay thế 4: giải trình)
 * type_apple_invoice: (mặc định = 1)
 *
 * @param pinCode: mã pin người dùng nhập
 * @returns {Promise<void>}
 */
const sendIncorrectInvoicesStart = async (
  notificationType,
  notificationNumber,
  notificationDate,
  invoices = [],
  pinCode = '',
) => {
  const params = {
    notification_type: notificationType,
    notification_date: notificationDate,
    invoices: invoices,
    notification_number: notificationNumber,
    pass_code: pinCode,
  };
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL + '/new/invoices-wrong',
    params,
  );
};

/**
 * @author chien: Xem trước thông báo sai sót
 * @param notificationType 1: không chọn yêu cầu rà soát, 2: chọn yêu cầu rà soát
 * @param notificationNumber: số TB của CQT ( khi notificationType=2)
 * @param notificationDate ngày TB của CQT ( khi notificationType=2)
 * @param invoices là mảng bao gồm các thông tin dưới đây
 * tax_authority_code: lấy trong thông tin invoice
 * template_code: lấy trong thông tin invoice
 * invoice_series: lấy trong thông tin invoice
 * invoice_date: lấy trong thông tin invoice
 * invoice_number: lấy trong thông tin invoice
 * reason: người dùng nhập
 * is_invoice_with_code: lấy trong thông tin invoice
 * invoice_id: lấy trong thông tin invoice
 * notification_nature: tính chất thông báo (1:Hủy 2:điều chỉnh 3:thay thế 4: giải trình)
 * type_apple_invoice: (mặc định = 1)
 *
 * @returns {Promise<void>}
 */
const previewIncorrectInvoices = async (
  notificationType,
  notificationNumber,
  notificationDate,
  invoices = [],
) => {
  const params = {
    notification_type: notificationType,
    notification_date: notificationDate,
    invoices: invoices,
    notification_number: notificationNumber,
    // pass_code: pinCode,
  };
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL + '/preview/invoice-wrong',
    params,
  );
};

/**
 * @chien hoàn thành việc thông báo 1 hoặc nhiều hóa đơn sai với CQT
 * @param xmlFile: lấy được khi gọi api informIncorrectInvoices
 * @param invoiceIds: id của các hóa đơn cần thông báo
 * @returns {Promise<void>}
 */
const sendIncorrectInvoicesDone = async (xmlFile, invoiceIds = []) => {
  const params = {
    xml_file: xmlFile,
    invoice_ids: invoiceIds,
  };
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL + '/new/invoices-wrong-send',
    params,
  );
};

/**
 * @author chien: thông báo hủy 1 hóa đơn, nếu hủy nhiều hóa đơn sẽ phải gọi api này nhiều lần
 * @param id: id hóa đơn
 * @param adjustmentType: Trạng thái điều chỉnh hóa đơn
 * @param destroyReason: lý do hủy
 * @param email: email thông báo
 * @param date: ngày hủy bỏ
 * @returns {Promise<void>}
 */
const cancelInvoiceStart = async (
  id,
  adjustmentType,
  destroyReason,
  email,
  date,
) => {
  const params = {
    invoice: {
      id: id,
      adjustment_type: adjustmentType,
      destroy_reason: destroyReason,
      email: email,
      date: date,
    },
  };
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL + '/invoices/get-xml',
    params,
  );
};

/**
 * @author chien: hoàn tất việc thông báo hủy 1 hóa đơn, nếu hủy nhiều phải gọi nhiều lần
 * @param id: id của hóa đơn
 * @param xmlString: xml nhận được khi gọi api cancelInvoice
 * @param destroyDate: ngày hủy
 * @param destroyReason: lý do hủy
 * @param email: email thông báo
 * @param pinCode: mã pin
 * @param invoiceFiles: danh sách file đính kèm (type="DK", file_name, file_content: base64 của file)
 * @returns {Promise<void>}
 */
const cancelInvoiceDone = async (
  id,
  xmlString,
  destroyDate,
  destroyReason,
  email,
  pinCode,
  invoiceFiles = [],
) => {
  const params = {
    invoice: {
      id: id,
      xml_string: xmlString,
      destroy_date: destroyDate,
      destroy_reason: destroyReason,
      email: email,
      pass_code: pinCode,
    },
    invoice_files: invoiceFiles,
  };
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL + '/invoices-cancel',
    params,
  );
};

/**
 * @author chien: kiểm tra xử lý hóa đơn
 * @param invoiceId id hóa đơn
 * @param adjustmentType Trạng thái xử lý hóa đơn
 * @returns {Promise<void>}
 */
const checkInvoiceProcessing = async (invoiceId, adjustmentType) => {
  return await axiosSendRequest(
    'get',
    Const.apiBaseURL +
      `/check-create/${invoiceId}?options[adjustment_type]=${adjustmentType}`,
  );
};

/**
 * @author chien: lấy file pdf và xml của thông điệp
 * @param id id của thông điệp cần lấy pdf và xmle
 * @param {boolean} xml = true nếu cần lấy xml, ko cần lấy thì truyền false
 * @param {boolean} pdf = true nếu cần lấy pdf, ko cần lấy thì truyền false
 * @returns trả về file đã được mã hóa base64
 */
const getPdfXmlOfMessage = async (id, xml, pdf) => {
  return await axiosSendRequest(
    'post',
    Const.apiBaseURL + '/get/pdf-xml-send',
    {id, xml, pdf},
  );
};

const getTotalInvoiceWaitingForExport = async () => {
  const params = {
    limit: 1,
    page: 1,
    options: {
      sum_payment_process: 1,
      is_view_index: 1,
    },
    fields: ['id'],
  };
  const filter_groups = [];
  const filters1 = [];
  filters1.push(api.utils.filter('crm_id', 'eq', null));
  filters1.push(api.utils.filter('batch_id', 'eq', null));
  filters1.push(api.utils.filter('send_department_status', 'eq', null));
  const filters2 = [];
  filters2.push(api.utils.filter('status', 'in', ['GHI_TAM', 'GIU_SO']));
  filter_groups.push({filters: filters1}, {filters: filters2});
  params.filter_groups = filter_groups;

  console.log(tag, 'getTotalInvoiceWaitingForExport params', params);

  const res = await axiosSendRequest(
    'get',
    Const.apiBaseURL + '/invoices',
    params,
  );
  const totalInvoice = res?.data?.meta?.total;
  return totalInvoice === undefined ? 0 : totalInvoice;
};

export default {
  getInvoices,
  createInvoice,
  exportInvoice,
  getTemplateList,
  getTemplateDetail,
  previewInvoice,
  getInvoiceDeclarations,
  searchCustomerInfoByTaxCode,
  getInvoiceDetail,
  getInvoiceHistory,
  updateInvoice,
  getMessageList,
  sendIncorrectInvoicesStart,
  sendIncorrectInvoicesDone,
  cancelInvoiceStart,
  cancelInvoiceDone,
  checkInvoiceProcessing,
  deleteTempInvoices,
  getDetailInvoiceHistory,
  previewIncorrectInvoices,
  getPdfXmlOfMessage,
  getTotalInvoiceWaitingForExport,
};
