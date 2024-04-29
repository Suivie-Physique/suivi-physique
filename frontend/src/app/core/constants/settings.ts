import { Icons } from "angular-feather/lib/icons.provider";

export class Setting{

    public static pages: Setting[] = [
        {
            icon: null,
            label: 'Membres',
            route: 'membres',
            expanded: false,
            active: false
        },
        {
            icon: null,
            label: 'Compte',
            route: 'compte',
            expanded: false,
            active: false
        },
        {
            icon: null,
            label: 'Jours Fériés',
            route: 'jours-feries',
            expanded: false,
            active: false
        },
        {
            icon: null,
            label: 'Archive',
            route: 'archive',
            expanded: false,
            active: false
        },
        {
            icon: null,
            label: 'Intégration',
            route: 'integration',
            expanded: false,
            active: false
        },
        {
            icon: null,
            label: 'Flux',
            route: 'flux',
            expanded: false,
            active: false
        },
        {
            icon: null,
            label: 'Organisation',
            route: 'organisation',
            expanded: false,
            active: false
        }

    ];
}