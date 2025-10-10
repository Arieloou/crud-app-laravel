import AppLayout from "@/layouts/app-layout";
import { route } from "ziggy-js";
import { Head, useForm } from "@inertiajs/react";
import { Role, User } from "@/types";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SheetHeader } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import InputError from "@/components/input-error";

interface UserEditProps {
    user: User;
    roles: Role[];
}

export default function EditUser({ user, roles }: UserEditProps) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name || '',
        email: user.email || '',
        role_id: user.role_id || '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('users.update', { id: user.id }));
    };

    return (
        <AppLayout>
            <Head title="Edit User" />
            <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
                <SheetHeader>Editar Usuario</SheetHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label className="name">Nombre</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            name="name"
                            placeholder="Full name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div>
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            name="email"
                            placeholder="email@example.com"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div>
                        <Label htmlFor="role">Rol</Label>
                        <Select
                            value={String(data.role_id)}
                            onValueChange={(value) => setData('role_id', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccione un Rol" />
                            </SelectTrigger>

                            <SelectContent>
                                {roles.map(role => (
                                    <SelectItem key={role.id} value={String(role.id)}>
                                        {role.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.role_id} />
                    </div>

                    <div>
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="text-right">
                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={processing}
                        >
                            Guardar
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}