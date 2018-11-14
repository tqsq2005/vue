<?php

use Illuminate\Database\Seeder;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 0; $i < 1500; ++$i) {
            $new = new \App\Entities\News();
            $new->title = $faker->realText(25);
            $new->author = $faker->realText(15);
            $new->content = $faker->realText(500);
            $new->save();
        }
    }
}
