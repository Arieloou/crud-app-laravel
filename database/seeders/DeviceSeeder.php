<?php
namespace Database\Seeders;

use App\Models\Category;
use App\Models\Device;
use App\Models\DeviceModel;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DeviceSeeder extends Seeder
{
    public function run(): void
    {
        $laptopCategory = Category::where('name', 'Laptop')->first();
        $macbookModel = DeviceModel::where('name', 'MacBook Pro M1')->first();
        $dellModel = DeviceModel::where('name', 'Dell XPS 15')->first();

        if ($laptopCategory && $macbookModel && $dellModel) {
            Device::firstOrCreate(
                ['serial_number' => 'SN001-MBP'],
                [
                    'device_model_id' => $macbookModel->id,
                    'category_id' => $laptopCategory->id,
                    'purchase_date' => Carbon::parse('2021-03-01'),
                    'state' => 'Activo',
                ]
            );

            Device::firstOrCreate(
                ['serial_number' => 'SN002-XPS'],
                [
                    'device_model_id' => $dellModel->id,
                    'category_id' => $laptopCategory->id,
                    'purchase_date' => Carbon::parse('2022-05-15'),
                    'state' => 'En Reparación',
                ]
            );
        }
    }
}