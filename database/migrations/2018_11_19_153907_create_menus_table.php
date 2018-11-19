<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 30)->index()->comment('菜单名称');
            $table->string('icon', 30)->nullable()->comment('菜单图标');
            $table->smallInteger('order')->default(1)->comment('排序');
            $table->string('url', 30)->nullable()->comment('菜单地址');
            $table->string('type', 30)->comment('菜单类型');
            $table->boolean('status')->comment('状态');
            $table->string('desc', 100)->nullable()->comment('备注信息');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
}
