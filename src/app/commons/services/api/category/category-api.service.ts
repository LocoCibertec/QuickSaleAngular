import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../../environments/environment';
import { IResponsev2 } from './../api-models-base.interface';
import { IRequestCreateUpdateCategory, IResponseCategory } from './category-api-model.interface';

export const URL_CATEGORY = 'http://localhost:8080/api/category';

@Injectable({
	providedIn: 'root'
})
export class CategoryApiService {
	constructor(private _httpClient: HttpClient) {}

	createCategory(request: IRequestCreateUpdateCategory): Observable<IResponsev2<IResponseCategory>> {
		return this._httpClient.post<IResponsev2<IResponseCategory>>(URL_CATEGORY, request);
	}

	getCategorys(): Observable<IResponsev2<IResponseCategory[]>> {
		return this._httpClient.get<IResponsev2<IResponseCategory[]>>(URL_CATEGORY);
	}
}
