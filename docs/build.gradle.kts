plugins {
    alias(libs.plugins.antora)
}

antora {
    packages = mapOf(
        "asciidoctor-kroki" to "latest",
        "asciidoctor-plantuml" to "latest"
    )
}
