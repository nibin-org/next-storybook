import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '../components/Badge';

const variants = ['info', 'gray', 'warning', 'success', 'danger', 'purple'] as const;

/**
 * Badge Component
 *
 * Compact label for statuses and categories.
 * Uses badge tokens from Figma (primary/secondary).
 */
const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Badge component styled with Figma badge tokens.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        appearance: {
            control: 'select',
            options: ['primary', 'secondary'],
            description: 'Primary (filled) or secondary (outlined) badge',
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        variant: {
            control: 'select',
            options: [...variants],
            description: 'Color variant',
            table: {
                defaultValue: { summary: 'gray' },
            },
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
            description: 'Badge size',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        children: {
            control: 'text',
            description: 'Badge content',
        },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
    },
    args: {
        children: 'Label',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        appearance: 'primary',
        variant: 'info',
        children: 'Label',
    },
};

export const Secondary: Story = {
    args: {
        appearance: 'secondary',
        variant: 'info',
        children: 'Label',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {variants.map((variant) => (
                    <Badge key={`p-${variant}`} appearance="primary" variant={variant}>
                        Label
                    </Badge>
                ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {variants.map((variant) => (
                    <Badge key={`s-${variant}`} appearance="secondary" variant={variant}>
                        Label
                    </Badge>
                ))}
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
        </div>
    ),
};
