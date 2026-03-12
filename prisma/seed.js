import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const collections = [
    {
        slug: "sparkle-and-shine",
        name: "Sparkle & Shine",
        tag: "NEW YEAR PARTY",
        description: "Party Szn Incoming",
        image: "/collections/editorial-party.jpg",
        button_text: "Shop this edit",
    },
    {
        slug: "keep-it-chill",
        name: "Keep It Chill",
        tag: "HANG OUT",
        description: "Effortless weekend style. Relaxed fits, natural fabrics, easy-going vibes.",
        image: "/collections/editorial-casual.jpg",
        button_text: "Shop this edit",
    },
    {
        slug: "power-dressing",
        name: "Power Dressing",
        tag: "OFFICE ATTIRE",
        description: "Commanding office style that blends Indonesian craftsmanship with modern tailoring.",
        image: "/collections/editorial-office.jpg",
        button_text: "Shop this edit",
    },
    {
        slug: "make-an-entrance",
        name: "Make an Entrance",
        tag: "GALA",
        description: "Show-stopping gowns and accessories for your most glamorous moments.",
        image: "/collections/editorial-gala.jpg",
        button_text: "Shop this edit",
    },
];

async function main() {
    const createdCollections = [];

    for (const collection of collections) {
        const record = await prisma.collections.upsert({
            where: { slug: collection.slug },
            update: {
                name: collection.name,
                tag: collection.tag,
                description: collection.description,
                image: collection.image,
                button_text: collection.button_text,
            },
            create: collection,
        });
        createdCollections.push(record);
    }

    const products = await prisma.products.findMany({
        select: { id: true },
        orderBy: { created_at: "desc" },
        take: 24,
    });

    if (products.length === 0) {
        console.log("No products found. Skipping collection mapping.");
        return;
    }

    const perCollection = Math.max(1, Math.floor(products.length / createdCollections.length));
    const mappings = [];

    createdCollections.forEach((collection, idx) => {
        const start = idx * perCollection;
        const slice = products.slice(start, start + perCollection);
        slice.forEach((product) => {
            mappings.push({
                collection_id: collection.id,
                product_id: product.id,
            });
        });
    });

    if (mappings.length > 0) {
        await prisma.collection_product_map.createMany({
            data: mappings,
            skipDuplicates: true,
        });
    }

    console.log("Seeded collections and mapped products.");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
