import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:14
 * @route '/devices'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/devices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:14
 * @route '/devices'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:14
 * @route '/devices'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:14
 * @route '/devices'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:14
 * @route '/devices'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:14
 * @route '/devices'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::index
 * @see app/Http/Controllers/DeviceController.php:14
 * @route '/devices'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:24
 * @route '/devices/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/devices/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:24
 * @route '/devices/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:24
 * @route '/devices/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:24
 * @route '/devices/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:24
 * @route '/devices/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:24
 * @route '/devices/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::create
 * @see app/Http/Controllers/DeviceController.php:24
 * @route '/devices/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/devices'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/devices',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/devices'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/devices'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/devices'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::store
 * @see app/Http/Controllers/DeviceController.php:55
 * @route '/devices'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:47
 * @route '/devices/{device}'
 */
export const show = (args: { device: string | number } | [device: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/devices/{device}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:47
 * @route '/devices/{device}'
 */
show.url = (args: { device: string | number } | [device: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: args.device,
                }

    return show.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:47
 * @route '/devices/{device}'
 */
show.get = (args: { device: string | number } | [device: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:47
 * @route '/devices/{device}'
 */
show.head = (args: { device: string | number } | [device: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:47
 * @route '/devices/{device}'
 */
    const showForm = (args: { device: string | number } | [device: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:47
 * @route '/devices/{device}'
 */
        showForm.get = (args: { device: string | number } | [device: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::show
 * @see app/Http/Controllers/DeviceController.php:47
 * @route '/devices/{device}'
 */
        showForm.head = (args: { device: string | number } | [device: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:35
 * @route '/devices/{device}/edit'
 */
export const edit = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/devices/{device}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:35
 * @route '/devices/{device}/edit'
 */
edit.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return edit.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:35
 * @route '/devices/{device}/edit'
 */
edit.get = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:35
 * @route '/devices/{device}/edit'
 */
edit.head = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:35
 * @route '/devices/{device}/edit'
 */
    const editForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:35
 * @route '/devices/{device}/edit'
 */
        editForm.get = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeviceController::edit
 * @see app/Http/Controllers/DeviceController.php:35
 * @route '/devices/{device}/edit'
 */
        editForm.head = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:70
 * @route '/devices/{device}'
 */
export const update = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/devices/{device}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:70
 * @route '/devices/{device}'
 */
update.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return update.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:70
 * @route '/devices/{device}'
 */
update.put = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:70
 * @route '/devices/{device}'
 */
update.patch = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:70
 * @route '/devices/{device}'
 */
    const updateForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:70
 * @route '/devices/{device}'
 */
        updateForm.put = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\DeviceController::update
 * @see app/Http/Controllers/DeviceController.php:70
 * @route '/devices/{device}'
 */
        updateForm.patch = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:85
 * @route '/devices/{device}'
 */
export const destroy = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/devices/{device}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:85
 * @route '/devices/{device}'
 */
destroy.url = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { device: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { device: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    device: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        device: typeof args.device === 'object'
                ? args.device.id
                : args.device,
                }

    return destroy.definition.url
            .replace('{device}', parsedArgs.device.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:85
 * @route '/devices/{device}'
 */
destroy.delete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:85
 * @route '/devices/{device}'
 */
    const destroyForm = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeviceController::destroy
 * @see app/Http/Controllers/DeviceController.php:85
 * @route '/devices/{device}'
 */
        destroyForm.delete = (args: { device: number | { id: number } } | [device: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const DeviceController = { index, create, store, show, edit, update, destroy }

export default DeviceController