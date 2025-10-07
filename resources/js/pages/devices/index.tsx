import AppLayout from "@/layouts/app-layout";
import Pagination from "@/components/pagination";
import { route }  from "ziggy-js";
import { Head, Link, router } from "@inertiajs/react";
import { PaginatedData, Device } from "@/types/global";

export default function IndexDevice({ devices, success } : { devices: PaginatedData<Device>; success? : string }) {
    const handleDelete = (id: number) => {
        if (confirm("¿Seguro que deseas eliminar este dispositivo?")) {
            router.delete(route("devices.destroy", { id: id }));
        }
    };

    
    return (
        <AppLayout>
            <Head title="Devices" />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Lista de Dispositivos</h1>

                {success && <p className="bg-green-100 text-green-700 p-2 rounded mb-4">{success}</p>}

                <div className="flex justify-end mb-4">
                    <Link
                        href={route("devices.create")}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        + Nuevo Dispositivo
                    </Link>
                </div>

                <table className="w-full bg-white border rounded">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">Serial</th>
                            <th className="p-2 border">Categoría</th>
                            <th className="p-2 border">Modelo</th>
                            <th className="p-2 border">Estado</th>
                            <th className="p-2 border">Fecha de Compra</th>
                            <th className="p-2 border">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices.data.map((device) => (
                            <tr key={device.id}>
                                <td className="border p-2">{device.serial_number}</td>
                                <td className="border p-2">{device.category?.name}</td>
                                <td className="border p-2">{device.device_model?.name}</td>
                                <td className="border p-2">{device.state}</td>
                                <td className="border p-2">{new Date(device.purchase_date).toLocaleDateString()}</td>
                                <td className="border p-2 flex gap-2">
                                    <Link
                                        href={route("devices.show", { id: device.id })}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Ver
                                    </Link>
                                    <Link
                                        href={route("devices.edit", { id: device.id })}
                                        className="text-yellow-600 hover:underline"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(device.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination links={devices.links} />
            </div>
        </AppLayout>
    );
}
