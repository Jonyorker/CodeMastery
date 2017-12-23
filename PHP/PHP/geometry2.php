<?php 


function pyth() {
	$C = sqrt(pow($_POST['A'], 2) + pow($_POST['B'], 2));
	return $C;
} 

?>


<html>
<?php echo $C; ?>
</html>