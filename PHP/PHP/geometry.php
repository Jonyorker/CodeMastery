<?php require "./template/header.php" ?>

<strong>Pythagorean Theorem
<form action="geometry2.php/pyth" method="post">
	<label>A</label>
	<input type="text" name="A">
	<lable>B</lable>
	<input type="text" name="B">
	<label>C</label>
	<span id="hypoteneuse"><?php echo $C ?></span>
	<input type="submit">
</form>

<?php require "./template/footer.php" ?>