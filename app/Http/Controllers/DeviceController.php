<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Device;
use App\Models\DeviceModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DeviceController extends Controller
{
    public function index()
    {
        $devices = Device::with(['deviceModel', 'category'])->latest()->paginate(10); // Paginación para mejor rendimiento

        return Inertia::render('devices/index', [
            'devices' => $devices,
            'success' => session('success'), // Para mensajes flash
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        $deviceModels = DeviceModel::all();

        return Inertia::render('devices/create', [
            'categories' => $categories,
            'deviceModels' => $deviceModels
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'serial_number' => 'required|string|unique:devices,serial_number|max:255',
            'device_model_id' => 'required|exists:device_models,id',
            'category_id' => 'required|exists:categories,id',
            'purchase_date' => 'required|date',
            'state' => 'required|string|max:255',
        ]);

        Device::create($request->all());

        return redirect()->route('devices.index')->with('success', 'Dispositivo creado correctamente');
    }

    public function edit(Device $device)
    {
        $categories = Category::all(['id', 'name']);
        $deviceModels = DeviceModel::all(['id', 'name']);

        return Inertia::render('devices/edit', [
            'device' => $device->load(['deviceModel', 'category']),
            'categories' => $categories,
            'deviceModels' => $deviceModels,
        ]);
    }

    public function update(Request $request, Device $device)
    {
        $request->validate([
            'serial_number' => 'required|string|unique:devices,serial_number,' . $device->id . '|max:255', // Ignora el propio dispositivo al validar unique
            'device_model_id' => 'required|exists:device_models,id',
            'category_id' => 'required|exists:categories,id',
            'purchase_date' => 'required|date',
            'state' => 'required|string|max:255',
        ]);

        $device->update($request->all());

        return redirect()->route('devices.index')->with('success', 'Dispositivo actualizado correctamente.');
    }

    public function show(Device $device)
    {
        return Inertia::render('devices/show', [
            'device' => $device->load(['deviceModel', 'category'])
        ]);
    }

    public function destroy(Device $device)
    {
        $device->delete();
        return redirect()->route('devices.index')->with('success', 'Dispositivo eliminado correctamente.');
    }
}