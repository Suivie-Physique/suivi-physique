/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete1 } from '../fn/admin-controller/delete-1';
import { Delete1$Params } from '../fn/admin-controller/delete-1';
import { get1 } from '../fn/admin-controller/get-1';
import { Get1$Params } from '../fn/admin-controller/get-1';
import { post1 } from '../fn/admin-controller/post-1';
import { Post1$Params } from '../fn/admin-controller/post-1';
import { put1 } from '../fn/admin-controller/put-1';
import { Put1$Params } from '../fn/admin-controller/put-1';

@Injectable({ providedIn: 'root' })
export class AdminControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `get1()` */
  static readonly Get1Path = '/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get1()` instead.
   *
   * This method doesn't expect any request body.
   */
  get1$Response(params?: Get1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return get1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `get1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get1(params?: Get1$Params, context?: HttpContext): Observable<string> {
    return this.get1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `put1()` */
  static readonly Put1Path = '/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `put1()` instead.
   *
   * This method doesn't expect any request body.
   */
  put1$Response(params?: Put1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return put1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `put1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  put1(params?: Put1$Params, context?: HttpContext): Observable<string> {
    return this.put1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `post1()` */
  static readonly Post1Path = '/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `post1()` instead.
   *
   * This method doesn't expect any request body.
   */
  post1$Response(params?: Post1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return post1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `post1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  post1(params?: Post1$Params, context?: HttpContext): Observable<string> {
    return this.post1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params?: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params?: Delete1$Params, context?: HttpContext): Observable<string> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
