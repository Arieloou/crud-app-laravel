<?php
namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::firstOrCreate(['name' => 'Laptop']);
        Category::firstOrCreate(['name' => 'Desktop']);
        Category::firstOrCreate(['name' => 'Tablet']);
        Category::firstOrCreate(['name' => 'Smartphone']);
    }
}