import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from './../../../../../environments/environment';
import { IResponsev2 } from './../api-models-base.interface';
import { IRequestCreateUpdateEvent, IResponseEvent } from './event-api-model.interface';
import { ResponseHomev2 } from '../event/event-api.class';
import { IResponseHomev2 } from '../home/home-api.interface';

export const URL_EVENT = environment.host + '/event';
@Injectable({
	providedIn: 'root'
})
export class EventApiService {
	constructor(private _httpClient: HttpClient) {}

	createEvent(request: IRequestCreateUpdateEvent): Observable<IResponsev2<IRequestCreateUpdateEvent>> {
		return this._httpClient.post<IResponsev2<IRequestCreateUpdateEvent>>(URL_EVENT, request);
	}

	getHome(): Observable<ResponseHomev2> {
		return this._httpClient.get<IResponseHomev2>(URL_EVENT).pipe(map((response) => new ResponseHomev2(response)));
	}

	getEvents(): Observable<IResponsev2<IResponseEvent[]>> {
		return this._httpClient.get<IResponsev2<IResponseEvent[]>>(URL_EVENT);
	}
}
