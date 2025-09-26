// scripts/copy-htaccess.mjs
import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("out");
const HTACCESS = path.join(OUT_DIR, ".htaccess");

// укажи свой домен
const DOMAIN = "antiklinz.at";

// .htaccess, который положим в out/
const CONTENT = `RewriteEngine On

# Canonical: https + non-www
RewriteCond %{HTTPS} !=on [OR]
RewriteCond %{HTTP_HOST} ^www\\.${DOMAIN}$ [NC]
RewriteRule ^ https://${DOMAIN}%{REQUEST_URI} [R=301,L]

# Custom 404
ErrorDocument 404 /404.html
`;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(HTACCESS, CONTENT, "utf8");

const stat = fs.statSync(HTACCESS);
console.log(`✓ .htaccess written: ${HTACCESS} (${stat.size} bytes)`);

const list = fs
  .readdirSync(OUT_DIR, { withFileTypes: true })
  .map(d => `${d.isDirectory() ? "[d]" : "[f]"} ${d.name}`)
  .join("\n");
console.log("out/ contents:\n" + list);
