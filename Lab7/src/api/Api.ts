/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Forecasts {
  /** Id */
  id: number;
  /** Owner */
  owner?: string;
  /** Moderator */
  moderator?: string;
  /** Tariffs count */
  tariffs_count?: string;
  /** Статус */
  status?: 1 | 2 | 3 | 4 | 5;
  /**
   * Дата создания
   * @format date-time
   */
  date_created?: string;
  /**
   * Дата формирования
   * @format date-time
   */
  date_formation?: string | null;
  /**
   * Дата завершения
   * @format date-time
   */
  date_complete?: string | null;
  /**
   * Days
   * @min -2147483648
   * @max 2147483647
   */
  days?: number | null;
  /**
   * Price
   * @min -2147483648
   * @max 2147483647
   */
  price?: number | null;
}

export interface TariffItem {
  /** Id */
  id: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Статус */
  status?: 1 | 2;
  /** Price */
  price: number;
  /**
   * RAM
   * @min -2147483648
   * @max 2147483647
   */
  ram: number;
  /**
   * CPU
   * @min -2147483648
   * @max 2147483647
   */
  cpu: number;
  /**
   * SSD
   * @min -2147483648
   * @max 2147483647
   */
  ssd: number;
  /**
   * Image
   * @format uri
   */
  image?: string;
  /** Count */
  count?: number;
}

export interface Forecast {
  /** Id */
  id: number;
  /** Owner */
  owner?: string;
  /** Moderator */
  moderator?: string;
  tariffs?: TariffItem[];
  /** Статус */
  status?: 1 | 2 | 3 | 4 | 5;
  /**
   * Дата создания
   * @format date-time
   */
  date_created?: string;
  /**
   * Дата формирования
   * @format date-time
   */
  date_formation?: string | null;
  /**
   * Дата завершения
   * @format date-time
   */
  date_complete?: string | null;
  /**
   * Days
   * @min -2147483648
   * @max 2147483647
   */
  days?: number | null;
  /**
   * Price
   * @min -2147483648
   * @max 2147483647
   */
  price?: number | null;
}

export interface TariffForecast {
  /** Pk */
  pk?: string;
  /**
   * Count
   * @min -2147483648
   * @max 2147483647
   */
  count?: number;
  /** Tariff */
  tariff: number;
  /** Forecast */
  forecast: number;
}

export interface Tariffs {
  /** Id */
  id: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Статус */
  status?: 1 | 2;
  /** Price */
  price: number;
  /**
   * RAM
   * @min -2147483648
   * @max 2147483647
   */
  ram: number;
  /**
   * CPU
   * @min -2147483648
   * @max 2147483647
   */
  cpu: number;
  /**
   * SSD
   * @min -2147483648
   * @max 2147483647
   */
  ssd: number;
  /**
   * Image
   * @format uri
   */
  image?: string;
}

export interface TariffAdd {
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Описание
   * @minLength 1
   * @maxLength 500
   */
  description: string;
  /**
   * Цена
   * @min -2147483648
   * @max 2147483647
   */
  price: number;
  /**
   * RAM
   * @min -2147483648
   * @max 2147483647
   */
  ram: number;
  /**
   * CPU
   * @min -2147483648
   * @max 2147483647
   */
  cpu: number;
  /**
   * SSD
   * @min -2147483648
   * @max 2147483647
   */
  ssd: number;
  /**
   * Фото
   * @format uri
   */
  image?: string | null;
}

export interface Tariff {
  /** Id */
  id: number;
  /**
   * Image
   * @format uri
   */
  image?: string;
  /** Price */
  price: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Описание
   * @minLength 1
   * @maxLength 500
   */
  description: string;
  /** Статус */
  status?: 1 | 2;
  /**
   * RAM
   * @min -2147483648
   * @max 2147483647
   */
  ram: number;
  /**
   * CPU
   * @min -2147483648
   * @max 2147483647
   */
  cpu: number;
  /**
   * SSD
   * @min -2147483648
   * @max 2147483647
   */
  ssd: number;
}

export interface User {
  /** ID */
  id?: number;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Superuser status
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser?: boolean;
}

export interface UserLogin {
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
}

export interface UserRegister {
  /** ID */
  id?: number;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
}

export interface UserUpdateProfile {
  /** Username */
  username?: string;
  /** Email */
  email?: string;
  /** Password */
  password?: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8000/api" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Snippets API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl http://localhost:8000/api
 * @contact <contact@snippets.local>
 *
 * Test description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  forecasts = {
    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsList
     * @request GET:/forecasts/
     * @secure
     */
    forecastsList: (
      query?: {
        status?: number;
        date_formation_start?: string;
        date_formation_end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Forecasts[], any>({
        path: `/forecasts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsCartList
     * @request GET:/forecasts/cart/
     * @secure
     */
    forecastsCartList: (params: RequestParams = {}) =>
      this.request<
        {
          tariffs_count: number;
          draft_forecast: number;
        },
        any
      >({
        path: `/forecasts/cart/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsRead
     * @request GET:/forecasts/{forecast_id}/
     * @secure
     */
    forecastsRead: (forecastId: string, params: RequestParams = {}) =>
      this.request<Forecast, any>({
        path: `/forecasts/${forecastId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsDeleteDelete
     * @request DELETE:/forecasts/{forecast_id}/delete/
     * @secure
     */
    forecastsDeleteDelete: (forecastId: string, params: RequestParams = {}) =>
      this.request<Forecast, any>({
        path: `/forecasts/${forecastId}/delete/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsDeleteTariffDelete
     * @request DELETE:/forecasts/{forecast_id}/delete_tariff/{tariff_id}/
     * @secure
     */
    forecastsDeleteTariffDelete: (forecastId: string, tariffId: string, params: RequestParams = {}) =>
      this.request<TariffItem[], any>({
        path: `/forecasts/${forecastId}/delete_tariff/${tariffId}/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsUpdateUpdate
     * @request PUT:/forecasts/{forecast_id}/update/
     * @secure
     */
    forecastsUpdateUpdate: (forecastId: string, data: Forecast, params: RequestParams = {}) =>
      this.request<Forecast, any>({
        path: `/forecasts/${forecastId}/update/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsUpdateStatusAdminUpdate
     * @request PUT:/forecasts/{forecast_id}/update_status_admin/
     * @secure
     */
    forecastsUpdateStatusAdminUpdate: (
      forecastId: string,
      data: {
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Forecast, any>({
        path: `/forecasts/${forecastId}/update_status_admin/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsUpdateStatusUserUpdate
     * @request PUT:/forecasts/{forecast_id}/update_status_user/
     * @secure
     */
    forecastsUpdateStatusUserUpdate: (forecastId: string, params: RequestParams = {}) =>
      this.request<Forecast, any>({
        path: `/forecasts/${forecastId}/update_status_user/`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags forecasts
     * @name ForecastsUpdateTariffUpdate
     * @request PUT:/forecasts/{forecast_id}/update_tariff/{tariff_id}/
     * @secure
     */
    forecastsUpdateTariffUpdate: (
      forecastId: string,
      tariffId: string,
      data: {
        count: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TariffForecast, any>({
        path: `/forecasts/${forecastId}/update_tariff/${tariffId}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tariffs = {
    /**
     * No description
     *
     * @tags tariffs
     * @name TariffsList
     * @request GET:/tariffs/
     * @secure
     */
    tariffsList: (
      query?: {
        tariff_name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Tariffs[], any>({
        path: `/tariffs/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tariffs
     * @name TariffsCreateCreate
     * @request POST:/tariffs/create/
     * @secure
     */
    tariffsCreateCreate: (data: TariffAdd, params: RequestParams = {}) =>
      this.request<Tariff, any>({
        path: `/tariffs/create/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tariffs
     * @name TariffsRead
     * @request GET:/tariffs/{tariff_id}/
     * @secure
     */
    tariffsRead: (tariffId: string, params: RequestParams = {}) =>
      this.request<Tariff, any>({
        path: `/tariffs/${tariffId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tariffs
     * @name TariffsAddToForecastCreate
     * @request POST:/tariffs/{tariff_id}/add_to_forecast/
     * @secure
     */
    tariffsAddToForecastCreate: (tariffId: string, params: RequestParams = {}) =>
      this.request<Forecast, any>({
        path: `/tariffs/${tariffId}/add_to_forecast/`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tariffs
     * @name TariffsDeleteDelete
     * @request DELETE:/tariffs/{tariff_id}/delete/
     * @secure
     */
    tariffsDeleteDelete: (tariffId: string, params: RequestParams = {}) =>
      this.request<Tariff, any>({
        path: `/tariffs/${tariffId}/delete/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tariffs
     * @name TariffsUpdateUpdate
     * @request PUT:/tariffs/{tariff_id}/update/
     * @secure
     */
    tariffsUpdateUpdate: (tariffId: string, data: Tariff, params: RequestParams = {}) =>
      this.request<Tariff, any>({
        path: `/tariffs/${tariffId}/update/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tariffs
     * @name TariffsUpdateImageCreate
     * @request POST:/tariffs/{tariff_id}/update_image/
     * @secure
     */
    tariffsUpdateImageCreate: (
      tariffId: string,
      data: {
        /** @format binary */
        image?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<Tariff, any>({
        path: `/tariffs/${tariffId}/update_image/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name UsersInfoList
     * @request GET:/users/info/
     * @secure
     */
    usersInfoList: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/info/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersLoginCreate
     * @request POST:/users/login/
     * @secure
     */
    usersLoginCreate: (data: UserLogin, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/login/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersLogoutCreate
     * @request POST:/users/logout/
     * @secure
     */
    usersLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/logout/`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersRegisterCreate
     * @request POST:/users/register/
     * @secure
     */
    usersRegisterCreate: (data: UserRegister, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/register/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersUpdateUpdate
     * @request PUT:/users/update/
     * @secure
     */
    usersUpdateUpdate: (data: UserUpdateProfile, params: RequestParams = {}) =>
      this.request<UserUpdateProfile, any>({
        path: `/users/update/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
