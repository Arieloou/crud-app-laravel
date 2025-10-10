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

// Types for the Breeze authentication layout
interface AuthenticatedLayoutProps {
    header?: React.ReactNode;
    children: React.ReactNode;
}