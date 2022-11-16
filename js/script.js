function calcular(tipo,valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('resultado').value = ''

        }
        if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === ','){
            document.getElementById('resultado').value += valor
        }
        if(valor === '='){
           var valorComponto = document.getElementById('resultado').value.replaceAll(',', '.')
           var valor_imput = eval(valorComponto)
           var valorComvirgula = valor_imput.toString().replaceAll('.', ',')
           document.getElementById('resultado').value = valorComvirgula
        }
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value +=valor
    }
    }
