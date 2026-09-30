---
name: build
description: Úsala cuando el usuario quiera subir los cambios al repositorio de GitHub: commitear, pushear, subir/"subí/actualizá/guarda los cambios", "hacer un feat/fix", o "subir a producción/desplegar". Verifica primero que todo funcione (lint + build), luego hace git add, crea un commit convencional (feat:, fix:, etc.) y hace push.
---

# Skill: build

Flujo para subir los cambios al repositorio de forma segura: **verificar → preparar → committear → pushear**.

## 1. Verificar que todo funcione

Antes de tocar git, comprobá que el proyecto esté sano y no rompas nada:

1. Revisá el estado del repo:
   - `git status --short` para ver qué cambió.
   - `git diff --stat` y `git diff` (o `git diff --cached` si ya hay staged) para revisar los cambios reales.
   - `git log --oneline -10` para ver el estilo de commits anteriores y el mensaje de la rama.
2. Corré las verificaciones del proyecto:
   - `npm run lint` (obligatorio). Si tarda mucho, usá un timeout de ~300s.
   - Si hay cambios de código/producto: `npm run build`. El comando exacto puede variar según `package.json`.
   - Si existe un script de tests (por ej. `npm test`): correrlo también.
3. **Si falla lint, build o tests → NO committees.** Informá el error al usuario, proponé la corrección y detenete ahí. Nunca committear código roto.

## 2. Preparar el commit

1. Verificá que no haya archivos sensibles (secretos, `.env`, tokens) en el diff.
2. Determiná el alcance: agregar solo los archivos relacionados con el cambio.
   - Generalmente `git add <archivos>` específicos.
   - Usar `git add .` solo si el usuario lo pidió o el cambio abarca muchos archivos.
3. Antes de committear hacé un último `git status --short` y `git diff --cached --stat` para confirmar lo que se va a agregar.

## 3. Crear el commit convencional

Formato siempre: `git commit -m "<tipo>: <resumen>"`. El resumen es corto, específico y en el idioma inglés.

Tipos a usar (conventional commits):

- `feat:` – nueva funcionalidad o feature.
- `fix:` – corrección de un bug.
- `refactor:` – cambio de código que no agrega funcionalidad ni corrige bugs.
- `docs:` – cambios de documentación.
- `style:` – formato, espacios, CSS, sin cambios de lógica.
- `perf:` – mejoras de rendimiento.
- `test:` – agregar/corregir tests.
- `chore:` – tareas de mantenimiento (build, deps, config).
- `build:` – cambios que afectan el build o dependencias.

Reglas:

- Elegí **un solo tipo** según el cambio principal. Si el usuario pidió un mensaje específico, usalo tal cual.
- Para cambios que rompen compatibilidad: `feat!: ...` o agregá el cuerpo con una nota.
- Videos/antecedentes: si el repo usa un estilo distinto, seguí el estilo del repo (mirá `git log --oneline`).

## 4. Pushear

1. `git push` (a la rama remota que corresponda).
2. Verificá el resultado: si rechaza por _non-fast-forward_ (stale branch):
   - `git pull --rebase` y reintentá el push (¡nunca `--force` salvo expresa orden del usuario!).
3. Confirmá que quedó todo sincronizado: `git status` limpio y `git log --oneline -3`.
4. Comunicá al usuario el resumen: qué se verificó, el hash/mensaje del commit y el push exitoso (con la rama).

## Normas duras

- **Nunca** hagas commit/push de código que no pase lint/build.
- **Nunca** uses `git push --force` a menos que el usuario lo pida explícitamente.
- **Nunca** committees secretos, `.env` ni credenciales.
- No committees si `git status` no muestra cambios ("nothing to commit").
- No hagas la verificación opcional (build/tests) cuando solo hay cambios de documentación o config trivial: lint + diff alcanza.
