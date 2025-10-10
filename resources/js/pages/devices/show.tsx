import AppLayout from "@/layouts/app-layout";
import { route } from "ziggy-js";
import { Head, Link } from "@inertiajs/react";
import { Device } from "@/types/global";

interface ShowDeviceProps {
    device: Device;
}

export default function ShowDevice ({ device }: ShowDeviceProps) {
    return (
        <AppLayout>
            <Head title="Inspect Device" />

            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Detalles del Dispositivo</h1>

                <div className="bg-white p-4 rounded shadow">
                    <p><strong>Serial:</strong> {device.serial_number}</p>
                    <p><strong>Modelo:</strong> {device.device_model.name}</p>
                    <p><strong>Categoría:</strong> {device.category.name}</p>
                    <p><strong>Estado:</strong> {device.state}</p>
                    <p><strong>Fecha de compra:</strong> {new Date(device.purchase_date).toLocaleDateString()}</p>
                </div>

                <div className="mt-4">
                    <Link href={route("devices.index")} className="text-blue-600 hover:underline">
                        Volver a la lista
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
