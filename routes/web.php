<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Marketing Pages
Route::get('/', function () {
    return Inertia::render('marketing/home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('marketing/about');
})->name('about');

Route::get('/features', function () {
    return Inertia::render('marketing/features');
})->name('features');

Route::get('/pricing', function () {
    return Inertia::render('marketing/pricing');
})->name('pricing');

Route::get('/contact', function () {
    return Inertia::render('marketing/contact');
})->name('contact');

Route::get('/faq', function () {
    return Inertia::render('marketing/faq');
})->name('faq');

Route::get('/demo', function () {
    return Inertia::render('marketing/demo');
})->name('demo');

Route::get('/resources', function () {
    return Inertia::render('marketing/resources');
})->name('resources');

Route::get('/privacy', function () {
    return Inertia::render('marketing/privacy');
})->name('privacy');

Route::get('/terms', function () {
    return Inertia::render('marketing/terms');
})->name('terms');

// Who It's For Pages
Route::prefix('who-its-for')->group(function () {
    Route::get('/', function () {
        return Inertia::render('marketing/who-its-for/index');
    })->name('who-its-for');
    
    Route::get('/hoa-board-members', function () {
        return Inertia::render('marketing/who-its-for/hoa-board-members');
    })->name('who-its-for.hoa-board-members');
    
    Route::get('/property-managers', function () {
        return Inertia::render('marketing/who-its-for/property-managers');
    })->name('who-its-for.property-managers');
    
    Route::get('/residents', function () {
        return Inertia::render('marketing/who-its-for/residents');
    })->name('who-its-for.residents');
    
    Route::get('/legal-advisors', function () {
        return Inertia::render('marketing/who-its-for/legal-advisors');
    })->name('who-its-for.legal-advisors');
});

// Authenticated Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
