import AppLayout from "@/layouts/app-layout";
import { route } from "ziggy-js";
import { Head, Link } from "@inertiajs/react";
import { User } from "@/types";

interface ShowUserProps {
    user: User;
}

export default function ShowUser ({ user }: ShowUserProps) {
    return (
        <AppLayout>
            <Head title="Inspect Device" />

            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Detalles del Usuario</h1>

                <div className="bg-white p-4 rounded shadow">
                    <p><strong>Nombre:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role?.name}</p>
                </div>
                <div className="mt-4">
                    <Link href={route("users.index")} className="text-blue-600 hover:underline">
                        Volver a la lista
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
