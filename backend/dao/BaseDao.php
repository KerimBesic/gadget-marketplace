<?php
require_once __DIR__.'/../config/config.php';
class BaseDao{protected $t;protected $c;public function __construct($t){$this->t=$t;$this->c=Database::connect();}
public function getAll(){$s=$this->c->prepare("SELECT * FROM ".$this->t);$s->execute();return $s->fetchAll();}}
