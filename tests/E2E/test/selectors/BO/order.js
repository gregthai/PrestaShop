module.exports = {
  OrderPage: {
    orders_subtab: '#subtab-AdminParentOrders',
    form: '#form-order',
    view_order_button: '//*[@id="form-order"]//tr[%NUMBER]//div[contains(@class,"pull-right")]//a',
    order_state_select: '#id_order_state',
    update_status_button: '//*[@id="status"]/form//button[@name="submitState"]',
    order_quantity: '//*[@id="orderProducts"]//tr[%NUMBER]/td[4]/span[contains(@class,"show")]',
    order_available_quantity: '//*[@id="orderProducts"]//tr[%NUMBER]/td[5]',
    order_status: '//*[@id="status"]//table[contains(@class,"history-status")]//tr[1]/td[2]',
    shipping_cost: '//*[@id="shipping_table"]//tr[1]//td[5]/span',
    message_order: '//*[@id="content"]//div[@class="message-body"]//p[@class="message-item-text"]',
    product_Url: '//*[@id="orderProducts"]//tr[1]/td[2]/a',
    edit_product_button: '//*[@id="orderProducts"]//button[contains(@class,"edit_product_change_link")]',
    product_basic_price: '//*[@id="orderProducts"]//tr[%NUMBER]//input[contains(@class,"edit_product_price_tax_incl")]',
    product_basic_price_TTC: '(//*[@id="orderProducts"]//span[@class="product_price_show"])[%NUMBER]',
    customer_name: '//*[@id="content"]//div[@class="message-body"]//h4[@class="message-item-heading"]',
    order_submenu: '//*[@id="subtab-AdminOrders"]/a',
    document_submenu: '//*[@id="tabOrder"]//a[@href="#documents"]',
    download_invoice_button: '(//*[@id="documents_table"]//a[contains(@href, "generateInvoicePDF")])[1]',
    download_delivery_button: '//*[@id="documents_table"]//tr[3]/td[3]/a',
    product_name: '//*[@id="orderProducts"]//tr[%NUMBER]//span[@class="productName"]',
    total_price: '//*[@id="total_products"]/td[contains(@class,"amount")]',
    shipping_method: '//*[@id="shipping_table"]//tr/td[3]',
    search_by_reference_input: '//*[@id="form-order"]//table[contains(@class,"order")]//input[@name="orderFilter_reference"]',
    search_order_button: '//*[@id="submitFilterButtonorder"]',
    first_order: '//*[@id="form-order"]//table//tbody//tr[1]//a',
    transform_guest_customer_button: '//*[@id="content"]//input[@name="submitGuestToCustomer"]',
    check_order_id: '(//*[@id="table-cart"]//td[3]/span)[1]',
    dropdown_button: '(//*[@id="table-cart"]/tbody//button[@data-toggle="dropdown"])[1]',
    delete_button: '(//*[@id="table-cart"]//a[@class="delete"])[1]',
    stock_product: '//*[@id="orderProducts"]//tr[%NUMBER]/td[5]',
    total_order: '//*[@id="total_order"]/td[@class="amount text-right nowrap"]/strong',
    total_product_price: '//*[@id="orderProducts"]//tr[%NUMBER]/td[6]',
    first_shopping_cart_checkbox: '//*[@id="table-cart"]//tr[1]//input[@name="cartBox[]"]',
    first_dropdown_button: '//*[@id="table-cart"]/tbody//tr[1]//button[@data-toggle="dropdown"]',
    total_price_tax_included: '//*[@id="orderProducts"]//tr[%NUMBER]/td[@class="total_product"]',
    order_view_button: '//*[@id="form-order"]//table//tr[%ORDERNumber]//td[12]//a',
    partial_refund: '//*[@id="desc-order-partial_refund"]',
    product_total: '//*[@id="documents"]//tr[contains(@id,"orderslip")]/td[4]',
    re_stock_product: '//label[@for="reinjectQuantitiesRefund"]',
    generate_credit_slip_checkbox: '//label[@for="generateCreditSlip"]',
    refund_products_button: '//button[@name="partialRefund"]',
    success_msg: '(//*[@id="main"]//div[contains(@class,"alert-success")])[1]',
    order_date: '(//*[@id="content"]//div[@class="kpi-content"])[1]/span[2]',
    order_ref: '(//*[@id="content"]//span[@class="badge"])[1]',
    product_information: '//*[@id="orderProducts"]//tr[1]/td[2]/a',
    empty_page_logo: '//*[@id="documents_table"]//div[@class="list-empty-msg"]',
    pdf_icon: '//*[@id="table-order"]//tr[%ORDER]//td[11]//i',
    invoice_document: '//table//td[3]/a',
    product_quantity: '//*[@id="orderProducts"]//span[contains(@class,"product_quantity_show")]',
    product_name_tab: '//*[@id="orderProducts"]//span[contains(@class,"productName")]',
    product_unit_price: '//*[@id="orderProducts"]//input[@name="product_price_tax_excl"]',
    product_unit_price_tax_included: '//*[@id="orderProducts"]//span[@class="product_price_show"]',
    product_price: '//*[@id="orderProducts"]//input[@name="product_price_tax_incl"]',
    total_order_price: '//*[@id="total_order"]/td[2]/strong',
    total_product: '//*[@id="total_products"]/td[2]',
    shipping_cost_price: '//*[@id="total_shipping"]/td[2]',
    total: '//*[@id="total_order"]/td[2]/strong',
    total_tax: '//*[@id="total_taxes"]/td[2]',
    carrier: '//*[@id="shipping_table"]//tr[1]/td[3]',
    payment_method: '//*[@id="formAddPayment"]//tr[1]/td[2]',
    payment_date_column: '//*[@id="formAddPayment"]//tr[1]/td[1]',
    order_id: '(//*[@id="content"]//span[@class="badge"])[2]',
    credit_slip_document_name: '//*[@id="documents_table"]//tr[3]//a',
    quantity_refund: '//*[@id="orderProducts"]//div[@class="input-group"]/input[@onchange="checkPartialRefundProductQuantity(this)"]',
    documents_tab: '//*[@id="tabOrder"]/li[2]/a',
    generate_invoice_button: '//*[@id="documents_table"]/tbody/tr/td/a',
    awaiting_bank_wire_payment_option: '//*[@id="form_generate_by_status_order_states"]//label/span[contains(text(),"Awaiting bank wire payment")]',
    awaiting_check_payment: '//*[@id="form_generate_by_status_order_states"]//label/span[contains(text(),"Awaiting check payment")]',
    cancelled_option: '//*[@id="form_generate_by_status_order_states"]//label/span[contains(text(),"Canceled")]',
    delivery_document_name: '//*[@id="documents_table"]//tr[3]//a',
    product_total_price: '//*[@id="total_order"]/td[2]/strong',
    delivery_slip_document: '//*[@id="documents_table"]//a[contains(@href, "DeliverySlip")]',
    status:'//*[@id="status"]//tr[1]/td[contains(text(),"%STATUS")]',
    customer_email:'//*[@id="content"]//dl[contains(@class,"list-detail")]//a',
    customer_created:'//*[@id="content"]//dd[@class="text-muted"]',
    valid_order_placed:'//*[@id="content"]//dl[contains(@class,"list-detail")]//dd//span[@class="badge"]',
    total_registration:'//*[@id="content"]//dd//span[contains(@class,"badge-success")]',
    shipping_address: '//*[@id="addressShipping"]',
    tab_invoice:'//*[@id="tabAddresses"]//a[@href="#addressInvoice"]',
    amount_payment:'//*[@id="formAddPayment"]//tr[1]/td[4]',
    tracking_number_column:'//*[@id="shipping_table"]//tr[1]/td[6]',
    shipping_address_bloc: '//*[@id="addressShipping"]',
    customer_email_link: '//*[@id="content"]//dl/dd[1]/a',
    customer_account_registred_text: '//*[@id="content"]//dd[@class="text-muted"]',
    valid_order_placed_number_span: '//*[@id="content"]//dd[3]/span',
    total_registration_span: '//*[@id="content"]//dd[4]/span',
    invoice_address_tab: '//*[@id="tabAddresses"]/li[2]/a',
    invoice_address: '//*[@id="addressInvoice"]',
    date_shipping: '//*[@id="shipping_table"]//tr/td[1]',
    weight_shipping: '//*[@id="shipping_table"]//tr/td[4]',
    page_title:'//*[@id="content"]//h1[@class="page-title"]',
    view_invoice_button: '//*[@id="content"]//div[contains(@class, "hidden-print")]/a[contains(@href, "generateInvoicePDF")]',
    date_invoice: '(//*[@id="documents_table"]//a[contains(@href, "generateInvoicePDF")])[1]',
  },

  CreateOrder: {
    new_order_button: '//*[@id="page-header-desc-order-new_order"]',
    customer_search_input: '//*[@id="customer"]',
    choose_customer_button: '//*[@id="customers"]/div[1]/div/div[2]/button',
    product_search_input: '//*[@id="product"]',
    quantity_input: '//*[@id="qty"]',
    add_to_cart_button: '//*[@id="submitAddProduct"]',
    order_message_textarea: '//*[@id="order_message"]',
    delivery_option: '//*[@id="delivery_option"]',
    payment: '//*[@id="payment_module_name"]',
    total_shipping: '//*[@id="total_shipping"]',
    create_order_button: '//*[@id="summary_part"]//button[@name="submitAddOrder"]',
    product_combination: '//*[@class="id_product_attribute"]',
    basic_price_value: '//*[@id="customer_cart"]//tr[1]//input[@class="product_unit_price"]',
    product_select: '//*[@id="id_product"]',
    new_customer_button: '//*[@id="search-customer-form-group"]//a',
    detail_customer_button: '//*[@id="customers"]//a',
    customer_details_header_bloc: '(//*[@id="container-customer"]//div[@class="panel-heading"])[1]',
    customer_details_email_link: '(//*[@id="container-customer"]//div[@class="panel-heading"])[1]/a',
    close_detail_link: '//a[@title="Close"]',
    detail_cart_button: '//*[@id="nonOrderedCarts"]//a[contains(@title,"View")]',
    use_cart_button: '//*[@id="nonOrderedCarts"]//a[contains(@title,"Use")]',
    orders_tab: '//*[@id="old_carts_orders_navtab"]/li[2]/a',
    detail_orders_button: '//*[@id="lastOrders"]//a[contains(@title,"View")]',
    use_orders_button: '//*[@id="lastOrders"]//a[contains(@class,"duplicate_order")]',
    total_with_tax: '//*[@id="total_with_taxes"]',
    delete_product_button: '//*[@id="customer_cart"]//a[contains(@class,"delete_product")]',
    quantity_arrow_up_button: '//*[@id="customer_cart"]//a[contains(@class,"increaseqty_product")]',
    quantity_arrow_down_button: '//*[@id="customer_cart"]//a[contains(@class,"decreaseqty_product")]',
    price_product_column: '//*[@id="customer_cart"]//td[6]',
    currency_select: '//*[@id="id_currency"]',
    language_select: '//*[@id="id_lang"]',
    voucher_input: '//*[@id="voucher"]',
    delete_voucher_button: '//*[@id="voucher_list"]//a[contains(@class,"delete_discount")]',
    new_voucher_button: '//*[@id="vouchers_part"]//a',
    detail_addresses_bloc: '//*[@id="address_delivery_detail"]',
    shipping_price: '//*[@id="shipping_price"]/b',
    edit_delivery_address_button: '//*[@id="edit_delivery_address"]',
    new_address_button: '//*[@id="new_address"]',
    delivery_address_select: '//*[@id="id_address_delivery"]',
    invoice_address_select: '//*[@id="id_address_invoice"]',
    free_shipping_button: '//*[@id="carrier_form"]/div[3]/div//label[@for="free_shipping%S"]',
    total_products_span: '//*[@id="total_products"]',
    total_vouchers_span: '//*[@id="total_vouchers"]',
    total_taxes_span: '//*[@id="total_taxes"]',
    total_tax_excluded_span: '//*[@id="total_without_taxes"]',
    total_tax_included_span: '//*[@id="total_with_taxes"]',
  },

  ShoppingCart: {
    check_first_order_id: '//*[@id="table-cart"]//tr[1]/td[3]/span',
    check_order_customer: '//*[@id="table-cart"]//tr[1]/td[4]',
    view_order_button: '//*[@id="table-cart"]//td[%NUMBER]//a[@title="View"]',
    total_cart: '//*[@id="box-kpi-cart"]//span[@class="value"]',
    customer_name: '//*[@id="content"]//a[text()="%NAME"]',
    product_unit_price: '//*[@id="orderProducts"]//tr[%NUMBER]/td[3]',
    quantity_product: '//*[@id="orderProducts"]//tr[%NUMBER]/td[4]',
    stock_product: '//*[@id="orderProducts"]//tr[%NUMBER]/td[5]',
    total_product: '//*[@id="orderProducts"]//tr[%NUMBER]/td[6]',
    total_cart_summary: '//*[@id="orderProducts"]//td[2]/strong',
    order_page: '//*[@id="content"]//a[contains(@href,"%s")]',
    export_carts_button: '//*[@id="page-header-desc-cart-export_cart"]',
    search_input: '//*[@id="table-cart"]//thead//input[@name="cartFilter_%searchParam"]',
    search_button: '//*[@id="submitFilterButtoncart"]',
    id: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    order_id: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    customer: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    total: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    carrier: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    date: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    customer_online: '//*[@id="table-cart"]//tr[%NUMBER]/td[%COL]',
    id_shopping_carts: 'table-cart',
    reset_button: '//*[@name="submitResetcart"]',
    checkbox_input: '//*[@id="table-cart"]//input[@name="cartBox[]"]',
    filter_id_input: '//*[@id="table-cart"]//input[@name="cartFilter_id_cart"]',
    product_name_cart: '//*[@id="orderProducts"]//tr[%NUMBER]/td[1]',
  },

  CreditSlip: {
    download_btn: '//*[@id="table-order_slip"]//td[2][contains(text(),"%ID")]/..//a',
    date_form: '//*[@id="date_from"]',
    date_to: '//*[@id="date_to"]',
    generate_button: '//*[@id="submitPrint"]',
    alert_message: '//*[@id="content"]//div[contains(@class,"alert-danger")]',
    credit_slip_prefix_input: '//*[@id="conf_id_PS_CREDIT_SLIP_PREFIX"]//div[@class="translatable-field lang-1"]//input',
    save_button: '//*[@id="order_slip_fieldset_general"]//button[@type="submit"]',
    green_validation: '//*[@id="content"]//div[@class="alert alert-success"]',
    first_credit_slip_download_btn: '//*[@id="table-order_slip"]/tbody/tr[1]/td[4]/a'
  },

  Invoices: {
    generate_pdf_button: '//*[@id="main-div"]//button[contains(text(),"Generate PDF file by date")]',
    generate_pdf_by_status_button: '//*[@id="main-div"]//button[contains(text(),"Generate PDF file by status")]',
    from_input: '//*[@id="form_generate_by_date_date_from"]',
    to_input: '//*[@id="form_generate_by_date_date_to"]',
    no_invoice_alert: '//*[@id="main-div"]//div[@class="alert-text"]/p'
  },
  DeliverySlip: {
    generate_btn: '//*[@id="delivery_pdf_fieldset"]//button',
    delivery_prefix: '//*[@id="form_options_prefix_1"]',
    delivery_number: '//*[@id="form_options_number"]',
    enable_product_image: '//*[@id="delivery_options_fieldset"]//label[@for="form_options_enable_product_image_1"]',
    disable_product_image: '//*[@id="delivery_options_fieldset"]//label[@for="form_options_enable_product_image_0"]',
    save_button: '//*[@id="delivery_options_fieldset"]//button[text()="Save"]',
    success_message: '//*[@id="main-div"]//div[@class="alert-text"]/p'
  }
};
