export class UserDTO {

    constructor(
    public userName: string,
    public lastName: string,
    public firstName: string,
    public rights: any[],
    public accountNonExpired: boolean,
    public accountNonLocked: boolean,
    public credentialsNonExpired: boolean,
    public enabled: boolean,
    public passwordEnabled: boolean) {}
}