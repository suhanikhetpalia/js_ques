<html>
<head>
<script>
const numbers = [5,3,8,9,2,11,56,3];


var maximum = numbers[0];
var minimum = numbers[0];

for (let i = 0; i < numbers.length; ++i) {
  if (numbers[i] > maximum) {
    maximum = numbers[i];
  }

}

  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] < minimum) {
        minimum = numbers[i];
    }
}

            
console.log(minimum);
console.log(maximum);

</script>
</head>
</html>