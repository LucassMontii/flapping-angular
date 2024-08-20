export interface IResponse<T>{
    status: number;
    message: string;
    data: T
}

export interface IUser{
    email: string;
    userName?: string;
    password: string
}