import AppLayout from "@/layouts/app-layout";
import Pagination from "@/components/pagination";
import { route }  from "ziggy-js";
import { Head, Link, router } from "@inertiajs/react";
import { PaginatedData, Device } from "@/types/global";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IconPlus } from "@tabler/icons-react"
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";

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
                    <Button>
                        <Link
                            href={route("devices.create")}>
                            + Nuevo Dispositivo
                        </Link>
                    </Button>

                    <ButtonGroup>
                        <Button variant="secondary">Button</Button>
                        <ButtonGroupSeparator />
                        <Button size="icon" variant="secondary">
                            <IconPlus />
                        </Button>
                    </ButtonGroup>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Serial</TableHead>
                            <TableHead>Categoría</TableHead>
                            <TableHead>Modelo</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead>Fecha de Compra</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {devices.data.map((device) => (
                            <TableRow key={device.id}>
                                <TableCell className="font-medium">{device.serial_number}</TableCell>
                                <TableCell>{device.category?.name}</TableCell>
                                <TableCell>{device.device_model?.name}</TableCell>
                                <TableCell>{device.state}</TableCell>
                                <TableCell>{new Date(device.purchase_date).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <div className="flex flex-row items-start gap-1">
                                        <Button variant={'outline'}>
                                            <Link
                                                href={route("devices.show", { id: device.id })} 
                                                className="text-black">
                                                Ver
                                            </Link>
                                        </Button>
                                        <Button>
                                            <Link
                                                href={route("devices.edit", { id: device.id })}
                                                className="text-yellow-600 hover:underline">
                                                Editar
                                            </Link>
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(device.id)}
                                            className="text-red-600 hover:underline">
                                            Eliminar
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Pagination links={devices.links} />
            </div>
        </AppLayout>
    );
}
