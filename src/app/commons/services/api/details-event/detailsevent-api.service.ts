import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IResponsev2 } from '../api-models-base.interface';
import { IRequestCreateUpdateDetailsEvent, IResponseDetailsEvent } from './detailsevent-api-model.interface';

export const URL_DETAILS_EVENT = environment.host + '/detailsevents';

@Injectable({
	providedIn: 'root'
})
export class DetailsEventApiService {
	constructor(private _httpClient: HttpClient) {}

	createDetailsEvent(
		request: IRequestCreateUpdateDetailsEvent
	): Observable<IResponsev2<IRequestCreateUpdateDetailsEvent>> {
		return this._httpClient.post<IResponsev2<IRequestCreateUpdateDetailsEvent>>(URL_DETAILS_EVENT, request);
	}

	getDetailsEvents(): Observable<IResponsev2<IResponseDetailsEvent[]>> {
		return this._httpClient.get<IResponsev2<IResponseDetailsEvent[]>>(URL_DETAILS_EVENT);
	}

	getDetailsEvent(id: number): Observable<IResponsev2<IResponseDetailsEvent>> {
		const url = `${URL_DETAILS_EVENT}/${id}`;
		return this._httpClient.get<IResponsev2<IResponseDetailsEvent>>(url);
	}

	getDetailsEventxEvent(id: number): Observable<IResponsev2<IResponseDetailsEvent>> {
		const url = `${URL_DETAILS_EVENT}/findxidEvent/${id}`;
		return this._httpClient.get<IResponsev2<IResponseDetailsEvent>>(url);
	}
}
