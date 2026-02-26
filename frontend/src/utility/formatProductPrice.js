export default function formatProductPrice (priceCents) {
    return (priceCents / 100).toFixed(2);
}