<?php

namespace SureCart\Models;

use SureCart\Models\Traits\HasPrice;

/**
 * Price model
 */
class LineItem extends Model {
	use HasPrice;

	/**
	 * Rest API endpoint
	 *
	 * @var string
	 */
	protected $endpoint = 'line_items';

	/**
	 * Object name
	 *
	 * @var string
	 */
	protected $object_name = 'line_item';
}
