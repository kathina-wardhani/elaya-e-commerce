# Prisma Setup Guide

## 1. Get Your Database Connection String

Go to your Supabase dashboard:
- https://supabase.com/dashboard/project/tcrntflauzdxypeeaanj
- Navigate to **Settings** → **Database**
- Copy the **Connection string** (choose "URI" format)
- It looks like: `postgresql://postgres:[PASSWORD]@db.tcrntflauzdxypeeaanj.supabase.co:5432/postgres`

## 2. Update .env File

Replace `[YOUR-PASSWORD]` in `.env` with your actual database password:

```env
DATABASE_URL="postgresql://postgres:YOUR_ACTUAL_PASSWORD@db.tcrntflauzdxypeeaanj.supabase.co:5432/postgres"
```

## 3. Push Schema to Database

This will create the tables in your Supabase database:

```bash
npm run db:push
```

## 4. Generate Prisma Client

This creates the typed client for autocomplete:

```bash
npm run db:generate
```

## 5. Start Development Server

```bash
npm run dev
```

## What Changed?

### New Files Created

1. **prisma/schema.prisma** - Your database schema definition
2. **src/lib/prisma.ts** - Prisma client singleton
3. **src/actions/products.ts** - Server Actions for product queries
4. **src/actions/brands.ts** - Server Actions for brand queries
5. **src/actions/newsletter.ts** - Server Action for newsletter subscription
6. **src/hooks/use-prisma-data.ts** - React Query hooks that call Server Actions

### Updated Files

- **src/components/layout/Footer.tsx** - Now uses `subscribeToNewsletter` action
- **package.json** - Added Prisma scripts

## How to Use

### Option 1: Use the new hooks (drop-in replacement)

In your components, replace:
```tsx
import { useFeaturedProducts } from "@/hooks/use-supabase-data";
```

With:
```tsx
import { useFeaturedProducts } from "@/hooks/use-prisma-data";
```

### Option 2: Use Server Actions directly in Server Components

```tsx
// In a Server Component (no "use client")
import { getFeaturedProducts } from "@/actions/products";

export default async function Page() {
  const products = await getFeaturedProducts(10);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Option 3: Use API Route (example already created)

- Visit: http://localhost:3000/api/products
- Example at: `src/app/api/products/route.ts`

## Database Management

### View your data visually

```bash
npm run db:studio
```

Opens Prisma Studio at http://localhost:5555

### Create migrations (when you change schema)

```bash
npm run db:migrate
```

### Push schema without migrations (faster for development)

```bash
npm run db:push
```

## Next Steps

You can now:
1. ✅ Keep using Supabase JS client (still works)
2. ✅ Use new Prisma Server Actions
3. ✅ Mix both approaches

The old `use-supabase-data.ts` hooks still work. You can gradually migrate components to use Prisma by switching to `use-prisma-data.ts`.
