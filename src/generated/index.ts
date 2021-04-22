import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://127.0.0.1/graphql", {
      method: "POST",
      body: JSON.stringify({ query, variables }),
    });
    
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents time data, represented as an ISO-8601 encoded UTC date string. */
  DateTime: any;
};

export type Action = {
  __typename?: 'Action';
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
  products: Array<Product>;
};

export type ActionFilterList = {
  actionId?: Maybe<StringFilterInput>;
};

export type Attribute = {
  __typename?: 'Attribute';
  title: Scalars['String'];
};

export type AttributeFilterList = {
  title?: Maybe<StringFilterInput>;
};

export type Banner = {
  __typename?: 'Banner';
  product?: Maybe<Product>;
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
  picture: Scalars['String'];
  link: Scalars['String'];
  sorting: Scalars['Int'];
};


export type BannerActiveArgs = {
  now?: Maybe<Scalars['DateTime']>;
};

export type Basket = {
  __typename?: 'Basket';
  owner: BasketOwner;
  items: Array<BasketItem>;
  cost: BasketCost;
  vouchers: Array<Voucher>;
  deliveryAddress?: Maybe<DeliveryAddress>;
  /** Returns selected payment for current basket. */
  payment?: Maybe<PaymentInterface>;
  /** Returns selected delivery method for current basket. */
  deliveryMethod?: Maybe<DeliveryMethodInterface>;
  id: Scalars['ID'];
  title: Scalars['String'];
  public: Scalars['Boolean'];
  creationDate?: Maybe<Scalars['DateTime']>;
  lastUpdateDate?: Maybe<Scalars['DateTime']>;
};


export type BasketItemsArgs = {
  pagination?: Maybe<PaginationFilterInput>;
};

export type BasketCost = {
  __typename?: 'BasketCost';
  productNet: Price;
  productGross: BasketProductBruttoSum;
  payment: Price;
  currency: Currency;
  delivery: Price;
  voucher: Scalars['Float'];
  discount: Scalars['Float'];
  total: Scalars['Float'];
};

export type BasketDeliveryMethod = DeliveryMethodInterface & {
  __typename?: 'BasketDeliveryMethod';
  cost: Price;
  id: Scalars['ID'];
  title: Scalars['String'];
  paymentTypes: Array<BasketPayment>;
  position: Scalars['Int'];
};

export type BasketItem = {
  __typename?: 'BasketItem';
  product?: Maybe<Product>;
  id: Scalars['ID'];
  amount: Scalars['Int'];
  lastUpdateDate?: Maybe<Scalars['DateTime']>;
};

export type BasketOwner = {
  __typename?: 'BasketOwner';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type BasketPayment = PaymentInterface & {
  __typename?: 'BasketPayment';
  cost: Price;
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
  description: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
};

export type BasketProductBruttoSum = {
  __typename?: 'BasketProductBruttoSum';
  vats: Array<BasketProductVats>;
  sum: Scalars['Float'];
};

export type BasketProductVats = {
  __typename?: 'BasketProductVats';
  vatRate: Scalars['Float'];
  vatPrice: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  parent?: Maybe<Category>;
  root?: Maybe<Category>;
  children: Array<Category>;
  seo: Seo;
  products: Array<Product>;
  id: Scalars['ID'];
  /**
   * Defines the order in which categories are displayed:
   * The category with the lowest number is displayed at the top,
   * and the category with the highest number at the bottom
   */
  position: Scalars['Int'];
  active: Scalars['Boolean'];
  /**
   * Hidden categories are not visible in lists and menu,
   * but can be accessed by direct link
   */
  hidden: Scalars['Boolean'];
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  /** If the external link is specified it will be opened instead of category content */
  externalLink: Scalars['String'];
  template: Scalars['String'];
  /**
   * If specified, all products, with price higher than specified,
   * will be shown in this category
   */
  priceFrom: Scalars['Float'];
  /**
   * If specified, all products, with price lower than specified,
   * will be shown in this category
   */
  priceTo: Scalars['Float'];
  icon?: Maybe<Scalars['String']>;
  promotionIcon?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['Float']>;
  /**
   * Skip all negative discounts for products in this category
   * (Discounts, Vouchers, Delivery ...)
   */
  skipDiscount: Scalars['Boolean'];
  showSuffix: Scalars['Boolean'];
  timestamp?: Maybe<Scalars['DateTime']>;
};


export type CategoryProductsArgs = {
  pagination?: Maybe<PaginationFilterInput>;
  sort?: Maybe<ProductSorting>;
};


export type CategoryActiveArgs = {
  now?: Maybe<Scalars['DateTime']>;
};

export type CategoryFilterList = {
  title?: Maybe<StringFilterInput>;
  parentId?: Maybe<StringFilterInput>;
};

export type CategoryIdFilterInput = {
  equals: Scalars['ID'];
};

export type CategorySorting = {
  position?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContactRequestInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Content = {
  __typename?: 'Content';
  seo: Seo;
  category?: Maybe<Category>;
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
  content: Scalars['String'];
  folder: Scalars['String'];
  version: Scalars['String'];
};

export type ContentFilterList = {
  folder?: Maybe<StringFilterInput>;
};

export type Country = {
  __typename?: 'Country';
  states: Array<State>;
  id: Scalars['ID'];
  position: Scalars['Int'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
  isoAlpha2: Scalars['String'];
  isoAlpha3: Scalars['String'];
  isoNumeric: Scalars['String'];
  shortDescription: Scalars['String'];
  description: Scalars['String'];
  creationDate?: Maybe<Scalars['DateTime']>;
};


export type CountryStatesArgs = {
  sort?: Maybe<StateSorting>;
};

export type CountryFilterList = {
  title?: Maybe<StringFilterInput>;
};

export type CountrySorting = {
  position?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  id: Scalars['Int'];
  name: Scalars['String'];
  rate: Scalars['Float'];
  sign: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  reviews: Array<Review>;
  newsletterStatus?: Maybe<NewsletterStatus>;
  deliveryAddresses: Array<DeliveryAddress>;
  invoiceAddress: InvoiceAddress;
  basket: Basket;
  baskets: Array<Basket>;
  orders: Array<Order>;
  files: Array<OrderFile>;
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  customerNumber: Scalars['String'];
  birthdate?: Maybe<Scalars['DateTime']>;
  points: Scalars['Int'];
  registered?: Maybe<Scalars['DateTime']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};


export type CustomerBasketArgs = {
  title: Scalars['String'];
};


export type CustomerOrdersArgs = {
  pagination?: Maybe<PaginationFilterInput>;
};

export type CustomerInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  birthdate?: Maybe<Scalars['DateTime']>;
};


export type DeliveryAddress = {
  __typename?: 'DeliveryAddress';
  country: Country;
  state?: Maybe<State>;
  id: Scalars['ID'];
  salutation: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company: Scalars['String'];
  additionalInfo: Scalars['String'];
  street: Scalars['String'];
  streetNumber: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  phone: Scalars['String'];
  fax: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
};

export type DeliveryMethod = DeliveryMethodInterface & {
  __typename?: 'DeliveryMethod';
  id: Scalars['ID'];
  title: Scalars['String'];
  paymentTypes: Array<BasketPayment>;
  position: Scalars['Int'];
};

export type DeliveryMethodInterface = {
  id: Scalars['ID'];
  title: Scalars['String'];
  paymentTypes: Array<BasketPayment>;
  position: Scalars['Int'];
};

export type DeliveryProvider = {
  __typename?: 'DeliveryProvider';
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  product: Product;
  id: Scalars['ID'];
  filename: Scalars['String'];
  onlyPaidDownload: Scalars['Boolean'];
};

export type IdFilterInput = {
  equals: Scalars['ID'];
};

export type Inquirer = {
  __typename?: 'Inquirer';
  firstName: Scalars['String'];
};

export type InvoiceAddress = {
  __typename?: 'InvoiceAddress';
  country: Country;
  state?: Maybe<State>;
  salutation: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company: Scalars['String'];
  additionalInfo: Scalars['String'];
  street: Scalars['String'];
  streetNumber: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  vatID: Scalars['String'];
  phone: Scalars['String'];
  mobile: Scalars['String'];
  fax: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String'];
  language: Scalars['String'];
  id: Scalars['ID'];
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  timestamp?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  url: Scalars['String'];
  creationDate?: Maybe<Scalars['DateTime']>;
};

export type LinkFilterList = {
  description?: Maybe<StringFilterInput>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  seo: Seo;
  products: Array<Product>;
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  shortdesc: Scalars['String'];
  timestamp?: Maybe<Scalars['DateTime']>;
};


export type ManufacturerProductsArgs = {
  pagination?: Maybe<PaginationFilterInput>;
  sort?: Maybe<ProductSorting>;
};

export type ManufacturerFilterList = {
  title?: Maybe<StringFilterInput>;
};

export type ManufacturerSorting = {
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  customerRegister: Customer;
  newsletterOptIn: NewsletterStatus;
  /**
   * NewsletterStatusUnsubscribeInput email field is optional.
   * In case of missing input email but available token, newsletter will be unsubscribed for token email.
   * Input email is preferred over token email.
   */
  newsletterUnsubscribe: Scalars['Boolean'];
  /**
   * NewsletterStatusSubscribeInput input fields are optional in case of token.
   * - If token exists without NewsletterStatusSubscribeInput, token email will be subscribed.
   *   If token user is already subscribed, status will not be changed and no optin mail is sent.
   * - If token and NewsletterStatusSubscribeInput exists, input email will be subscribed.
   *   If input email user is already subscribed, status will be changed to 2 and
   *   optin mail is sent depending on shop config parameter blOrderOptInEmail.
   * - If only NewsletterStatusSubscribeInput exists, input email will be subscribed.
   *   If input email user is already subscribed, status will be changed to 2 and
   *   optin mail is sent depending on shop config parameter blOrderOptInEmail.
   *
   * If user account for email and shop exists, input fields are overruled by existing user data.
   * If user account for email and shop does not exist, new user will be created (no password, mininal data)
   */
  newsletterSubscribe: NewsletterStatus;
  contactRequest: Scalars['Boolean'];
};


export type MutationCustomerRegisterArgs = {
  customer: CustomerInput;
};


export type MutationNewsletterOptInArgs = {
  newsletterStatus: NewsletterStatusInput;
};


export type MutationNewsletterUnsubscribeArgs = {
  newsletterStatus?: Maybe<NewsletterStatusUnsubscribeInput>;
};


export type MutationNewsletterSubscribeArgs = {
  newsletterStatus: NewsletterStatusSubscribeInput;
};


export type MutationContactRequestArgs = {
  request: ContactRequestInput;
};

export type NewsletterStatus = {
  __typename?: 'NewsletterStatus';
  salutation: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  status: Scalars['String'];
  failedEmailCount: Scalars['Int'];
  subscribed?: Maybe<Scalars['DateTime']>;
  unsubscribed?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type NewsletterStatusInput = {
  email: Scalars['String'];
  confirmCode: Scalars['String'];
};

export type NewsletterStatusSubscribe = {
  __typename?: 'NewsletterStatusSubscribe';
  salutation: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type NewsletterStatusSubscribeInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type NewsletterStatusUnsubscribe = {
  __typename?: 'NewsletterStatusUnsubscribe';
  email: Scalars['String'];
};

export type NewsletterStatusUnsubscribeInput = {
  email: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  invoiceAddress: OrderInvoiceAddress;
  deliveryAddress?: Maybe<OrderDeliveryAddress>;
  cost: OrderCost;
  delivery: OrderDelivery;
  vouchers: Array<Voucher>;
  items: Array<OrderItem>;
  payment?: Maybe<OrderPayment>;
  files: Array<OrderFile>;
  id: Scalars['ID'];
  orderNumber: Scalars['Int'];
  invoiceNumber: Scalars['Int'];
  paid?: Maybe<Scalars['DateTime']>;
  remark: Scalars['String'];
  cancelled: Scalars['Boolean'];
  invoiced?: Maybe<Scalars['DateTime']>;
  ordered?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type OrderCost = {
  __typename?: 'OrderCost';
  delivery: Price;
  payment: Price;
  productNet: Price;
  productGross: OrderProductBruttoSum;
  currency: Currency;
  total: Scalars['Float'];
  voucher: Scalars['Float'];
  discount: Scalars['Float'];
};

export type OrderDelivery = {
  __typename?: 'OrderDelivery';
  provider: DeliveryProvider;
  trackingNumber: Scalars['String'];
  trackingURL: Scalars['String'];
  dispatched?: Maybe<Scalars['DateTime']>;
};

export type OrderDeliveryAddress = {
  __typename?: 'OrderDeliveryAddress';
  country: Country;
  state?: Maybe<State>;
  salutation: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company: Scalars['String'];
  additionalInfo: Scalars['String'];
  street: Scalars['String'];
  streetNumber: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  phone: Scalars['String'];
  fax: Scalars['String'];
};

export type OrderFile = {
  __typename?: 'OrderFile';
  file?: Maybe<File>;
  id: Scalars['ID'];
  filename: Scalars['String'];
  firstDownload?: Maybe<Scalars['DateTime']>;
  latestDownload?: Maybe<Scalars['DateTime']>;
  downloadCount: Scalars['Int'];
  maxDownloadCount: Scalars['Int'];
  validUntil?: Maybe<Scalars['DateTime']>;
  valid: Scalars['Boolean'];
  url: Scalars['String'];
};

export type OrderInvoiceAddress = {
  __typename?: 'OrderInvoiceAddress';
  country: Country;
  state?: Maybe<State>;
  salutation: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company: Scalars['String'];
  additionalInfo: Scalars['String'];
  street: Scalars['String'];
  streetNumber: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  vatID: Scalars['String'];
  phone: Scalars['String'];
  fax: Scalars['String'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  product?: Maybe<Product>;
  id: Scalars['ID'];
  amount: Scalars['Float'];
  sku: Scalars['String'];
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  price: Price;
  itemPrice: Price;
  dimensions: ProductDimensions;
  insert: Scalars['DateTime'];
  timestamp: Scalars['DateTime'];
  cancelled: Scalars['Boolean'];
  bundle: Scalars['Boolean'];
};

export type OrderPayment = {
  __typename?: 'OrderPayment';
  payment?: Maybe<PaymentInterface>;
  values: Array<OrderPaymentValue>;
  id: Scalars['ID'];
  updated?: Maybe<Scalars['DateTime']>;
};

export type OrderPaymentValue = {
  __typename?: 'OrderPaymentValue';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type OrderProductBruttoSum = {
  __typename?: 'OrderProductBruttoSum';
  vats: Array<OrderProductVats>;
  sum: Scalars['Float'];
};

export type OrderProductVats = {
  __typename?: 'OrderProductVats';
  vatRate: Scalars['Float'];
  vatPrice: Scalars['Float'];
};

export type PaginationFilterInput = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Payment = PaymentInterface & {
  __typename?: 'Payment';
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
  description: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
};

export type PaymentInterface = {
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
  description: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
};

export type Price = {
  __typename?: 'Price';
  currency: Currency;
  price: Scalars['Float'];
  vat: Scalars['Float'];
  vatValue: Scalars['Float'];
  nettoPriceMode: Scalars['Boolean'];
};

export type Product = {
  __typename?: 'Product';
  dimensions: ProductDimensions;
  price: Price;
  listPrice: Price;
  stock: ProductStock;
  imageGallery: ProductImageGallery;
  rating: ProductRating;
  deliveryTime: ProductDeliveryTime;
  scalePrices: Array<ProductScalePrice>;
  bundleProduct?: Maybe<Product>;
  manufacturer?: Maybe<Manufacturer>;
  vendor?: Maybe<Vendor>;
  categories: Array<Category>;
  unit?: Maybe<ProductUnit>;
  seo: Seo;
  crossSelling: Array<Product>;
  attributes: Array<ProductAttribute>;
  accessories: Array<Product>;
  selectionLists: Array<SelectionList>;
  reviews: Array<Review>;
  variants: Array<Product>;
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  sku?: Maybe<Scalars['String']>;
  ean: Scalars['String'];
  manufacturerEan: Scalars['String'];
  mpn: Scalars['String'];
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  vat: Scalars['Float'];
  insert?: Maybe<Scalars['DateTime']>;
  freeShipping: Scalars['Boolean'];
  timestamp?: Maybe<Scalars['DateTime']>;
  variantLabels: Array<Scalars['String']>;
  variantValues: Array<Scalars['String']>;
  wishedPriceEnabled: Scalars['Boolean'];
  varMinPrice: Scalars['Float'];
};


export type ProductCategoriesArgs = {
  onlyMainCategory?: Maybe<Scalars['Boolean']>;
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  attribute: Attribute;
  value: Scalars['String'];
};

export type ProductDeliveryTime = {
  __typename?: 'ProductDeliveryTime';
  minDeliveryTime: Scalars['Int'];
  maxDeliveryTime: Scalars['Int'];
  /**
   * Value can be one of:
   * - DAY
   * - WEEK
   * - MONTH
   */
  deliveryTimeUnit: Scalars['String'];
};

export type ProductDimensions = {
  __typename?: 'ProductDimensions';
  length: Scalars['Float'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  weight: Scalars['Float'];
};

export type ProductFilterList = {
  title?: Maybe<StringFilterInput>;
  category?: Maybe<CategoryIdFilterInput>;
  manufacturer?: Maybe<IdFilterInput>;
  vendor?: Maybe<IdFilterInput>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  image: Scalars['String'];
  icon: Scalars['String'];
  zoom: Scalars['String'];
};

export type ProductImageGallery = {
  __typename?: 'ProductImageGallery';
  images: Array<ProductImage>;
  icon: Scalars['String'];
  thumb: Scalars['String'];
};

export type ProductRating = {
  __typename?: 'ProductRating';
  rating: Scalars['Float'];
  count: Scalars['Int'];
};

export type ProductScalePrice = {
  __typename?: 'ProductScalePrice';
  /**
   * Whether the scale price is
   * - a new absolute price (you can query that in the `absolutePrice` field)
   * - or a percentage discount (you can query that in the `discount` field)
   */
  absoluteScalePrice: Scalars['Boolean'];
  absolutePrice?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  amountFrom: Scalars['Int'];
  amountTo: Scalars['Int'];
};

export type ProductSorting = {
  position?: Maybe<Scalars['String']>;
  minPriceVariant?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  productNumber?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProductStock = {
  __typename?: 'ProductStock';
  stock: Scalars['Float'];
  /**
   * Value can be one of:
   *  0 -> (green) deliverable
   *  1 -> (orange) deliverable, but only a few left
   * -1 -> (red) not stock
   */
  stockStatus: Scalars['Int'];
  restockDate?: Maybe<Scalars['DateTime']>;
};

export type ProductUnit = {
  __typename?: 'ProductUnit';
  price: Price;
  name: Scalars['String'];
};

export type Promotion = {
  __typename?: 'Promotion';
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  title: Scalars['String'];
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** retrieve a JWT for authentication of further requests */
  token: Scalars['String'];
  product: Product;
  products: Array<Product>;
  vendor: Vendor;
  vendors: Array<Vendor>;
  category: Category;
  categories: Array<Category>;
  manufacturer: Manufacturer;
  manufacturers: Array<Manufacturer>;
  link: Link;
  links: Array<Link>;
  action: Action;
  actions: Array<Action>;
  banner: Banner;
  banners: Array<Banner>;
  promotion: Promotion;
  promotions: Array<Promotion>;
  content: Content;
  contents: Array<Content>;
  /** If `name` is ommited, gives you the currently active currency */
  currency: Currency;
  currencies: Array<Currency>;
  attribute: Attribute;
  attributes: Array<Attribute>;
  review: Review;
  wishedPrice: WishedPrice;
  wishedPrices: Array<WishedPrice>;
  country: Country;
  countries: Array<Country>;
  basket: Basket;
  /** Argument `owner` will be matched against lastname and / or email */
  baskets: Array<Basket>;
};


export type QueryTokenArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryProductsArgs = {
  filter?: Maybe<ProductFilterList>;
  pagination?: Maybe<PaginationFilterInput>;
  sort?: Maybe<ProductSorting>;
};


export type QueryVendorArgs = {
  id: Scalars['String'];
};


export type QueryVendorsArgs = {
  filter?: Maybe<VendorFilterList>;
  sort?: Maybe<VendorSorting>;
};


export type QueryCategoryArgs = {
  id: Scalars['String'];
};


export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryFilterList>;
  sort?: Maybe<CategorySorting>;
};


export type QueryManufacturerArgs = {
  id: Scalars['String'];
};


export type QueryManufacturersArgs = {
  filter?: Maybe<ManufacturerFilterList>;
  sort?: Maybe<ManufacturerSorting>;
};


export type QueryLinkArgs = {
  id: Scalars['String'];
};


export type QueryLinksArgs = {
  filter?: Maybe<LinkFilterList>;
};


export type QueryActionArgs = {
  id: Scalars['String'];
};


export type QueryActionsArgs = {
  filter?: Maybe<ActionFilterList>;
};


export type QueryBannerArgs = {
  id: Scalars['String'];
};


export type QueryPromotionArgs = {
  id: Scalars['String'];
};


export type QueryContentArgs = {
  id: Scalars['String'];
};


export type QueryContentsArgs = {
  filter?: Maybe<ContentFilterList>;
};


export type QueryCurrencyArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryAttributeArgs = {
  id: Scalars['String'];
};


export type QueryAttributesArgs = {
  filter?: Maybe<AttributeFilterList>;
};


export type QueryReviewArgs = {
  id: Scalars['String'];
};


export type QueryWishedPriceArgs = {
  id: Scalars['String'];
};


export type QueryCountryArgs = {
  id: Scalars['String'];
};


export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterList>;
  sort?: Maybe<CountrySorting>;
};


export type QueryBasketArgs = {
  id: Scalars['String'];
};


export type QueryBasketsArgs = {
  owner: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  reviewer?: Maybe<Reviewer>;
  product?: Maybe<Product>;
  language: Language;
  active: Scalars['Boolean'];
  id: Scalars['ID'];
  text: Scalars['String'];
  rating: Scalars['Int'];
  createAt?: Maybe<Scalars['DateTime']>;
};

export type Reviewer = {
  __typename?: 'Reviewer';
  firstName: Scalars['String'];
};

export type Selection = {
  __typename?: 'Selection';
  value: Scalars['String'];
};

export type SelectionList = {
  __typename?: 'SelectionList';
  title: Scalars['String'];
  fields: Array<Selection>;
};

export type Seo = {
  __typename?: 'Seo';
  description: Scalars['String'];
  keywords: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type State = {
  __typename?: 'State';
  id: Scalars['ID'];
  title: Scalars['String'];
  isoAlpha2: Scalars['String'];
  creationDate?: Maybe<Scalars['DateTime']>;
};

export type StateSorting = {
  title?: Maybe<Scalars['String']>;
};

export type StringFilterInput = {
  equals?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  beginsWith?: Maybe<Scalars['String']>;
};

export type Subscriber = {
  __typename?: 'Subscriber';
  userName: Scalars['String'];
};

export type Vendor = {
  __typename?: 'Vendor';
  seo: Seo;
  products: Array<Product>;
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  shortdesc: Scalars['String'];
  timestamp?: Maybe<Scalars['DateTime']>;
};


export type VendorProductsArgs = {
  pagination?: Maybe<PaginationFilterInput>;
  sort?: Maybe<ProductSorting>;
};

export type VendorFilterList = {
  title?: Maybe<StringFilterInput>;
};

export type VendorSorting = {
  title?: Maybe<Scalars['String']>;
};

export type Voucher = {
  __typename?: 'Voucher';
  series: VoucherSeries;
  id: Scalars['ID'];
  voucher: Scalars['String'];
  number: Scalars['String'];
  reserved?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Float']>;
  redeemedAt?: Maybe<Scalars['DateTime']>;
};

export type VoucherSeries = {
  __typename?: 'VoucherSeries';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  validFrom?: Maybe<Scalars['DateTime']>;
  validTo?: Maybe<Scalars['DateTime']>;
  discount: Scalars['Float'];
  discountType: Scalars['String'];
};

export type WishedPrice = {
  __typename?: 'WishedPrice';
  inquirer?: Maybe<Inquirer>;
  product: Product;
  price: Price;
  currency: Currency;
  id: Scalars['ID'];
  email: Scalars['String'];
  /**
   * This field gives us information about the last sent notification email.
   * When it is null it states that no notification email was sent.
   */
  notificationDate?: Maybe<Scalars['DateTime']>;
  creationDate?: Maybe<Scalars['DateTime']>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title'>
  )> }
);


export const ProductsDocument = `
    query Products {
  products(filter: null, pagination: null, sort: null) {
    id
    title
  }
}
    `;
export const useProductsQuery = <
      TData = ProductsQuery,
      TError = unknown
    >(
      variables?: ProductsQueryVariables, 
      options?: UseQueryOptions<ProductsQuery, TError, TData>
    ) => 
    useQuery<ProductsQuery, TError, TData>(
      ['Products', variables],
      fetcher<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables),
      options
    );