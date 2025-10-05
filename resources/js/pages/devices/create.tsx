import AppLayout from "@/layouts/app-layout";
import React, { useState } from "react";
import { route } from "ziggy-js";
import { Head, Link, useForm } from "@inertiajs/react";

interface DeviceCreateProps {
    auth: AuthProps;
    categories: Category[];
    deviceModels: DeviceModel[];
}

export default function DeviceCreate({ categories, deviceModels }: DeviceCreateProps) {
    const { data, setData, post, processing, errors } = useForm({
        serial_number: '',
        device_model_id: '',
        category_id: '',
        purchase_date: '',
        state: 'Activo',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('devices.store'));
    };

    return (
        <AppLayout>
            <Head title="Create Device" />
            <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Registrar nuevo dispositivo</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">Número de serie</label>
                        <input
                            type="text"
                            value={data.serial_number}
                            onChange={e => setData('serial_number', e.target.value)}
                            className="w-full border rounded p-2"
                        />
                        {errors.serial_number && <p className="text-red-500 text-sm">{errors.serial_number}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Categoría</label>
                        <select
                            value={data.category_id}
                            onChange={e => setData('category_id', e.target.value)}
                            className="w-full border rounded p-2"
                        >
                            <option value="">Seleccione una categoría</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                        {errors.category_id && <p className="text-red-500 text-sm">{errors.category_id}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Modelo</label>
                        <select
                            value={data.device_model_id}
                            onChange={e => setData('device_model_id', e.target.value)}
                            className="w-full border rounded p-2"
                        >
                            <option value="">Seleccione un modelo</option>
                            {deviceModels.map(model => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                        {errors.device_model_id && <p className="text-red-500 text-sm">{errors.device_model_id}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Fecha de compra</label>
                        <input
                            type="date"
                            value={data.purchase_date}
                            onChange={e => setData('purchase_date', e.target.value)}
                            className="w-full border rounded p-2"
                        />
                        {errors.purchase_date && <p className="text-red-500 text-sm">{errors.purchase_date}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Estado</label>
                        <select
                            value={data.state}
                            onChange={e => setData('state', e.target.value)}
                            className="w-full border rounded p-2"
                        >
                            <option value="Activo">Activo</option>
                            <option value="En Reparación">En Reparación</option>
                            <option value="Obsoleto">Obsoleto</option>
                        </select>
                        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                    </div>

                    <div className="text-right">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
