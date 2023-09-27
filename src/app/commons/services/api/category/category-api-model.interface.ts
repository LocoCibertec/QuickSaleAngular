//#region  GET CATEGORY
export interface IResponseCategory {
	idCategory: number;
	description: string;
	status: string;
}
//#endregion

//#region CREATE CATEGORY
export interface IRequestCreateUpdateCategory {
	description: string;
	status: string;
}
//#endregion
