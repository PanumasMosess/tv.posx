<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// $routes->get('/', 'Home::index');
$routes->get('/', 'DashBoardController::index/$1');
$routes->get('/upload/(:any)', 'UploadController::index/$1');
$routes->post('/upload_customer', 'UploadController::inert_message');