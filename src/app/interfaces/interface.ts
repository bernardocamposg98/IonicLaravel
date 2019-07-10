export interface RespuestaUsuarios {
    usuarios: Usuario[];
}

export interface Usuario {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
}
