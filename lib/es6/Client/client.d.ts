export declare class Client {
    private url;
    private username;
    private avatar;
    constructor(url: string);
    setUsername(username: string): void;
    setAvatar(avatar: string): void;
    send(message: object): Promise<import("axios").AxiosResponse<any, any>>;
}
