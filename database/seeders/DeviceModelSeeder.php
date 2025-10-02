<?php
namespace Database\Seeders;

use App\Models\DeviceModel;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DeviceModelSeeder extends Seeder
{
    public function run(): void
    {
        DeviceModel::firstOrCreate(['name' => 'MacBook Pro M1'], ['manufacture_date' => Carbon::parse('2021-01-15')]);
        DeviceModel::firstOrCreate(['name' => 'Dell XPS 15'], ['manufacture_date' => Carbon::parse('2022-03-10')]);
        DeviceModel::firstOrCreate(['name' => 'HP EliteDesk 800'], ['manufacture_date' => Carbon::parse('2020-07-20')]);
        DeviceModel::firstOrCreate(['name' => 'iPad Air 5'], ['manufacture_date' => Carbon::parse('2023-09-01')]);
    }
}