import { Link } from '@inertiajs/react';

// Interface for the pagination component props
interface PaginationProps {
    links: PaginatedLink[]; // We use the interface defined in global.d.ts
}

export default function Pagination({ links }: PaginationProps) {
    return (
        <nav className="text-center mt-4">
            {links.map(link => (
                <Link
                    preserveScroll
                    key={link.label}
                    href={link.url || '#'}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-xs " +
                        (link.active ? "bg-gray-950 text-white " : " ") +
                        (!link.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-950 hover:text-white")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}