<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// $routes->get('/', 'Home::index');
$routes->get('/', 'DashBoardController::index');
$routes->get('/ig_get/(:any)', 'DashBoardController::IG/$1');   
$routes->get('/ig_status/(:any)', 'DashBoardController::ig_status_update/$1');  
$routes->get('/time_get/(:any)', 'DashBoardController::IG_TIME/$1');   
$routes->get('/upload/(:any)', 'UploadController::index/$1');
$routes->get('/upload_video/(:any)', 'UploadController::upload_video/$1');
$routes->post('/upload_customer', 'UploadController::inert_message');