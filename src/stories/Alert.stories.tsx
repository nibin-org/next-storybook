import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Alert } from '../components/Alert';

/**
 * Alert Component
 *
 * Inline alert component with four variants (info, success, warning, danger)
 * and three sizes (sm, md, lg). Styled using Figma design tokens.
 */
const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Alert component styled with Figma design tokens via TailwindCSS.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'danger'],
            description: 'The visual style variant of the alert',
            table: {
                defaultValue: { summary: 'info' },
            },
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the alert',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        showIcon: {
            control: 'boolean',
            description: 'Show the leading status icon',
            table: {
                defaultValue: { summary: 'true' },
            },
        },
        showClose: {
            control: 'boolean',
            description: 'Show the close button',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        children: {
            control: 'text',
            description: 'The alert message',
        },
        // Hide non-essential props
        className: { table: { disable: true } },
        onClose: { table: { disable: true } },
        icon: { table: { disable: true } },
        style: { table: { disable: true } },
    },
    args: {
        children: 'This is an alert message',
        showIcon: true,
        showClose: true,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        variant: 'info',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '120px repeat(3, minmax(0, 1fr))',
                gap: '12px',
                alignItems: 'start',
                width: '100%',
                maxWidth: '960px',
            }}
        >
            <div />
            <div style={{ fontWeight: 600, textAlign: 'center' }}>sm</div>
            <div style={{ fontWeight: 600, textAlign: 'center' }}>md</div>
            <div style={{ fontWeight: 600, textAlign: 'center' }}>lg</div>

            <div style={{ fontWeight: 600 }}>Info</div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="info" size="sm">Small alert message</Alert></div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="info">This is an info alert message</Alert></div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="info" size="lg">Large alert message</Alert></div>

            <div style={{ fontWeight: 600 }}>Success</div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="success" size="sm">Small alert message</Alert></div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="success">This is a success alert message</Alert></div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="success" size="lg">Large alert message</Alert></div>

            <div style={{ fontWeight: 600 }}>Warning</div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="warning" size="sm">Small alert message</Alert></div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="warning">This is a warning alert message</Alert></div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="warning" size="lg">Large alert message</Alert></div>

            <div style={{ fontWeight: 600 }}>Danger</div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="danger" size="sm">Small alert message</Alert></div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="danger">This is a danger alert message</Alert></div>
            <div style={{ minWidth: 0 }}><Alert className="w-full" variant="danger" size="lg">Large alert message</Alert></div>
        </div>
    ),
};
