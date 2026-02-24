import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toggle } from '../components/Toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Toggle component styled with design tokens.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md'],
            description: 'Toggle size',
            table: {
                defaultValue: { summary: 'sm' },
            },
        },
        checked: {
            control: 'boolean',
            description: 'Controlled checked state',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the toggle',
        },
        label: {
            control: 'text',
            description: 'Toggle label',
        },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
        onChange: { table: { disable: true } },
    },
    args: {
        label: 'Label',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {
    args: {
        checked: false,
    },
};

export const On: Story = {
    args: {
        checked: true,
    },
};

export const DisabledOff: Story = {
    args: {
        checked: false,
        disabled: true,
    },
};

export const DisabledOn: Story = {
    args: {
        checked: true,
        disabled: true,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Toggle size="sm" checked={false} />
                <Toggle size="sm" checked={false} disabled />
                <Toggle size="sm" checked />
                <Toggle size="sm" checked disabled />
            </div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Toggle size="md" checked={false} />
                <Toggle size="md" checked={false} disabled />
                <Toggle size="md" checked />
                <Toggle size="md" checked disabled />
            </div>
        </div>
    ),
};
