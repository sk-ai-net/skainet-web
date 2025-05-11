plugins {
    alias(libs.plugins.antora)
}

antora {
    packages = mapOf(
        "asciidoctor-kroki" to "latest",
        "asciidoctor-plantuml" to "latest"
    )
}

tasks.register("clean") {
    group = "build"
    description = "Deletes the build directories and generated files"
    
    doLast {
        delete(
            "_public",
            ".gradle",
            "build",
            "../build"
        )
    }
}
