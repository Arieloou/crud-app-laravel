import { route as routeFn } from 'ziggy-js';

declare global {
    var route: typeof routeFn;
}

// Defines types for the Laravel models that are passed to Inertia
interface Category {
    id: number;
    name: string;
}

interface DeviceModel {
    id: number;
    name: string;
    manufacture_date?: string; // Or Date, depending on how Laravel casts it
}

interface Device {
    id: number;
    serial_number: string;
    device_model_id: number;
    category_id: number;
    purchase_date: string; // Format YYYY-MM-DD 
    state: string;
    device_model: DeviceModel; // eager-loaded relationship 
    category: Category; // eager-loaded relationship 
    created_at: string;
    updated_at: string;
}

// Types for Inertia/Laravel pagination
interface PaginatedLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedData<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginatedLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

// Interface for the Inertia authentication user object
interface AuthUser {
    id: number;
    name: string;
    email: string;
    // Add permissions/roles here if you share them from HandleInertiaRequests
    can: string[]; // For example, if you pass an array of permission names
    roles: string[]; // For example, if you pass an array of role names
}

interface AuthProps {
    user: AuthUser;
}

// Definitions for Ziggy (Laravel routes)
declare module 'ziggy-js' {
    interface ZiggyConfig {
        // Define your routes here if you want strict typing
        // Or use a more permissive type if you don't need each route explicitly typed
        routes: Record<string, any>;
    }

    export function route(
        name: string,
        params?: Record<string, any>,
        absolute?: boolean,
        config?: any
    ): string;
}

// Extend the Window object to include Ziggy if needed for global use
declare interface Window {
    Ziggy: any;
}

// Types for the Breeze authentication layout
interface AuthenticatedLayoutProps {
    user: AuthUser;
    header?: React.ReactNode;
    children: React.ReactNode;
}