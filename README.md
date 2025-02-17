# Estrategia de Branching GITFLOW 

## Ramas principales
- **main**: Código listo para producción.
- **develop**: Estado más reciente del desarrollo en curso.

## Ramas secundarias
- **feature/***: Desarrollo de nuevas funcionalidades.
- **bugfix/***: Corrección de errores en `develop` o `main`.
- **hotfix/***: Soluciones urgentes para problemas en producción.

## Políticas
- Todos los cambios deben realizarse mediante pull requests.
- La rama `main` requiere al menos un aprobador y que todas las pruebas pasen.
- No se permiten commits directos en `main` ni `develop`.

## Actions
- El Build y Deploy solo seran ejecutados cuando se haga el merge a cualquiera de las ramas main o develop 
- Las ramas secundarias solo llegaran hasta el proceso de unit test.

