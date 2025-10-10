import AppLayout from "@/layouts/app-layout";
import Pagination from "@/components/pagination";
import { route }  from "ziggy-js";
import { Head, Link, router } from "@inertiajs/react";
import { PaginatedData } from "@/types/global";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IconPlus } from "@tabler/icons-react"
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";

export default function IndexUser({ users, success } : { users: PaginatedData<User>; success? : string }) {
    const handleDelete = (id: number) => {
        if (confirm("¿Seguro que deseas eliminar este usuario?")) {
            router.delete(route("users.destroy", { id: id }));
        }
    };
    
    return (
        <AppLayout>
            <Head title="Users" />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>

                {success && <p className="bg-green-100 text-green-700 p-2 rounded mb-4">{success}</p>}

                <div className="flex justify-end mb-4">
                    <ButtonGroup>
                        <Button variant="secondary">
                            <Link
                                href={route("users.create")}>
                                Nuevo Usuario
                            </Link>
                        </Button>
                        <ButtonGroupSeparator />
                        <Button size="icon" variant="secondary">
                            <Link
                                href={route("users.create")}>
                                <IconPlus />
                            </Link>
                        </Button>
                    </ButtonGroup>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Email</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Creation Date</TableHead>
                            <TableHead>Update Date</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.data.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.email}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.role?.name}</TableCell>
                                <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                                <TableCell>{new Date(user.updated_at).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <div className="flex flex-row items-start gap-1">
                                        <Button variant={'outline'}>
                                            <Link
                                                href={route("users.show", { id: user.id })} 
                                                className="text-black">
                                                Ver
                                            </Link>
                                        </Button>
                                        <Button variant={'default'}>
                                            <Link
                                                href={route("users.edit", { id: user.id })}>
                                                Editar
                                            </Link>
                                        </Button>
                                        <Button
                                            variant={'destructive'}
                                            onClick={() => handleDelete(user.id)}
                                            className="hover:underline">
                                            Eliminar
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Pagination links={users.links} />
            </div>
        </AppLayout>
    );
}
