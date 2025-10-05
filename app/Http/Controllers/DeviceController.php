<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Device;
use App\Models\DeviceModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DeviceController extends Controller
{
    public function index() : Response
    {
        $devices = Device::with(['deviceModel', 'category'])->latest()->paginate(10); // Paginación para mejor rendimiento

        return Inertia::render('devices/index', [
            'devices' => $devices,
            'success' => session('success'), // Para mensajes flash
        ]);
    }

    public function create() : Response
    {
        $categories = Category::all();
        $deviceModels = DeviceModel::all();

        return Inertia::render('devices/create', [
            'categories' => $categories,
            'deviceModels' => $deviceModels
        ]);
    }

    public function edit(Device $device) : Response
    {
        $categories = Category::all(['id', 'name']);
        $deviceModels = DeviceModel::all(['id', 'name']);

        return Inertia::render('devices/edit', [
            'device' => $device->load(['deviceModel', 'category']),
            'categories' => $categories,
            'deviceModels' => $deviceModels,
        ]);
    }

    public function show(string $id) : Response
    {
        return Inertia::render('devices/show', [
            'device' => Device::findOrFail($id)->load(['deviceModel', 'category'])
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

    public function destroy(Device $device)
    {
        $device->delete();
        return redirect()->route('devices.index')->with('success', 'Dispositivo eliminado correctamente.');
    }
}